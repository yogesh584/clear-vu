import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FilterIcon, HeaderSearchIcon } from "../../util/Svg";
import { useForm } from "react-hook-form";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import { SearchInput, SearchSubmitButton } from "../Form/Form";
import cardStyles from "../../styles/card.module.css"
import useRequest from "../../hooks/useRequest";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../styles/slider.css"

const OBJ_TABLE = {
    SKU: "sku",
    Location: "location",
    "Product name": "productName",
    "Last Washed": "lastWashed",
    "Total Washed": "totalWashed",
    "Next Wash cycle": "nextWashCycle",
    "Status": "status",
};

const getSortingField = (sortBy) => {
    let finalSortField = sortBy;
    if (sortBy == "Location") {
        finalSortField = "location";
    } else if (sortBy == "Product name") {
        finalSortField = "productName";
    } else if (sortBy == "Clean stock") {
        finalSortField = "cleanStock"
    } else if (sortBy == "Par level") {
        finalSortField = "parLevel"
    } else if (sortBy == "Dirty return") {
        finalSortField = "dirtyReturn"
    } else if (sortBy == "Del. qty") {
        finalSortField = "deliveredQuantity"
    } else if (sortBy == "Fill rate") {
        finalSortField = "fillRate"
    } else if (sortBy == "Last Washed") {
        finalSortField = "lastWashed"
    } else if (sortBy == "Total Washed") {
        finalSortField = "totalWashed"
    } else if (sortBy == "Next Wash cycle") {
        finalSortField = "nextWashCycle"
    } else if (sortBy == "Status") {
        finalSortField = "status"
    } else if (sortBy == "Installation Date") {
        finalSortField = "installationDate"
    }

    return finalSortField;
}

const GarmentsComp = ({ activeTab, isDataAlreadyFetched, changeLinenStatus }) => {
    const [tableData, setTableData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "",
        order: "",
    });
    const [searchKey, setSearchKey] = useState("");
    const [isFilteredApplied, setIsFiltersApplied] = useState(false);
    const [locationList, setLocationList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [lastUpdatedAt, setLastUpdatedAt] = useState([]);
    const [extraQueryString, setExtraQueryString] = useState("")
    const [timer, setTimer] = useState(null);

    let { records_per_page } = useSelector((state) => state.setting);
    let { userId, floorDetails } = useSelector((state) => state.auth);


    useEffect(() => {
        if (!records_per_page) {
            records_per_page = 10;
            setPerPage(10)
        } else {
            setPerPage(records_per_page)
        }
    }, [records_per_page])
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
        getValues
    } = useForm();

    const { request: requestGarmentsData, response: responseGarmentsData } = useRequest()
    const { request: requestGarmentsCards, response: responseGarmensCards } = useRequest();

    const { request: requestProductList, response: responseProductList } = useRequest();
    const { request: requestLocationList, response: responseLocationList } = useRequest();

    const getData = (page=0, perPage=records_per_page, sortBy="location", order="desc", extras=extraQueryString) => {
        requestGarmentsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${perPage ?? 10}&page=${page}&orderByField=${sortBy}&ascending=${order == "asc"}${extras}`);
    }

    useEffect(() => {
        if (activeTab == "garments") {
            if (!isDataAlreadyFetched.card) {
                requestGarmentsCards("get", `api/inventory/get-summaryCard?userId=${userId}&categoryId=2&size=${perPage}&page=0`);
            }

            if (!isDataAlreadyFetched.table) {
                getData(0,records_per_page);
            }

            if (!isDataAlreadyFetched.filters.productName) {
                requestProductList("get", `api/product?categoryId=2`)
            }

            if (!isDataAlreadyFetched.filters.location) {
                requestLocationList("get", `api/floor?facilityId=${floorDetails.facilityId}&allData=false&categoryId=2`)
            }
        }
    }, [activeTab])

    useEffect(() => {
        if (responseLocationList) {
            setLocationList(responseLocationList.data)
            changeLinenStatus({ ...isDataAlreadyFetched, filters: { productName: isDataAlreadyFetched.filters.productName, location: true } })
        }
    }, [responseLocationList])

    useEffect(() => {
        if (responseProductList) {
            setProductList(responseProductList.data)
            changeLinenStatus({ ...isDataAlreadyFetched, filters: { productName: true, location: isDataAlreadyFetched.filters.location } })
        }
    }, [responseProductList])

    useEffect(() => {
        if (responseGarmentsData) {
            changeLinenStatus({ ...isDataAlreadyFetched, table: true })
            const { content, totalElements, lastUpdatedDateTime } = responseGarmentsData;
            setTableData(content)
            setLastUpdatedAt(lastUpdatedDateTime)
            setTotalDocuments(totalElements)
        }
    }, [responseGarmentsData])

    useEffect(() => {
        if (responseGarmensCards) {
            changeLinenStatus({ ...isDataAlreadyFetched, card: true })
            setCardData(responseGarmensCards)
        }
    }, [responseGarmensCards])


    const onSearchHandler = () => {
        const { productName, location } = getValues();
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if (productName) {
            querySearchString += `&productId=${productName}`
        }
        if (location) {
            querySearchString += `&floorId=${location}`
        }
        setExtraQueryString(querySearchString)
        getData(0,perPage, finalSortField,currentSort.order, querySearchString);
        setPage(0);
        setIsFiltersApplied(true)
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        setSearchKey("")
        setTimer(null);
        let finalSortField = getSortingField(currentSort.sortBy);
        resetField("productName");
        resetField("location");
        setPage(0);
        getData(0,perPage, finalSortField,currentSort.order, "");
        setIsFiltersApplied(false);
    };

    const sortingHandler = (sortBy) => {
        const { productName, location } = getValues();
        let querySearchString = "";
        if (productName) {
            querySearchString += `&productId=${productName}`
        }
        if (location) {
            querySearchString += `&floorId=${location}`
        }
        let finalSortField = getSortingField(sortBy);
        if (currentSort.sortBy == sortBy) {
            const newOrder = currentSort.order === "asc" ? "desc" : "asc";
            getData(0, perPage, finalSortField, newOrder,`${querySearchString}${(searchKey.length > 2) ? `&searchKey=${searchKey}` : ""}`)
            setCurrentSort({ sortBy, order: newOrder });
        } else {
            getData(0, perPage, finalSortField, currentSort.order,`${querySearchString}${(searchKey.length > 2) ? `&searchKey=${searchKey}` : ""}`)
            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
        console.log("selected : ", selected)
        setPage(selected + 1);
        const { productName, location } = getValues();
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if (productName) {
            querySearchString += `&productId=${productName}`
        }
        if (location) {
            querySearchString += `&floorId=${location}`
        }
        setExtraQueryString(querySearchString)
        getData(selected,perPage, finalSortField,currentSort.order, `${querySearchString}${(searchKey.length > 2) ? `&searchKey=${searchKey}` : ""}`);
    };


    const perPageChangeHandler = (event) => {
        setPage(0);
        setPerPage(event.target.value);
        const { productName, location } = getValues();
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if (productName) {
            querySearchString += `&productId=${productName}`
        }
        if (location) {
            querySearchString += `&floorId=${location}`
        }
        setExtraQueryString(querySearchString)
        getData(0,event.target.value, finalSortField,currentSort.order, `${querySearchString}${(searchKey.length > 2) ? `&searchKey=${searchKey}` : ""}`);
    };

    const InputFields = [
        {
            label: "Product Name",
            name: "productName",
            isSelectInput: true,
            children: <>
                <option value={""}>Please Select Product Name</option>
                {Array.isArray(productList) && productList.map((l) => {
                    return <option key={l.productId} value={l.productId}>{l.productName}</option>
                })}
            </>
        },
        {
            label: "Location",
            name: "location",
            isSelectInput: true,
            children: <>
                <option value={""}>Please Select Location</option>
                {Array.isArray(locationList) && locationList.map((l) => {
                    return <option key={l.floorId} value={l.floorId}>{l.floorName}</option>
                })}

            </>
        },
    ];

    // const filteredTableData = tableData?.filter((item) => {
    //     return (
    //         item.location.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
    //         item.productName.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
    //         item.sku.toLowerCase().includes(searchKey?.toLowerCase() || "")
    //     );
    // });

    useEffect(()=>{

        const { productName, location } = getValues();
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if (productName) {
            querySearchString += `&productId=${productName}`
        }
        if (location) {
            querySearchString += `&floorId=${location}`
        }

        if (timer && searchKey.length == "0") {
            getData(0,perPage, currentSort.sortBy,currentSort.order);
            setPage(0)
            return;
        }

        if (searchKey.length < 3) {
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        const newTimer = setTimeout(() => {
            getData(0,perPage, finalSortField,currentSort.order, `${querySearchString}&searchKey=${searchKey}`);
            setPage(0)
            // getUserList(0, perPage, currentSort.sortBy, currentSort.order, `&searchKey=${searchKey}`)
        }, 2000);

        setTimer(newTimer);

        return () => clearTimeout(newTimer);
    },[searchKey])

    return <div id="garments" role="tabpanel" aria-labelledby="garments-tab" style={{ display: activeTab == "garments" ? "block" : "none" }}>
        {/*         CARDS        */}
        <div id="cards_parent swiper" className="mt-4 mb-6">
            <Swiper
                modules={[SwiperPagination]}
                slidesPerView={3}
                loop={false}
                observer={true}
                pagination={{
                    clickable: true
                }}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                id="cards" className="d-flex w-100 px-3 justify-content-between pb-10"
            >
                {Array.isArray(cardData) && cardData.map((d, index) => {
                    return <SwiperSlide key={index + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                        <div id="row1" className="d-flex justify-content-between">
                            <div>
                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>{d.location}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                    <span>35.71%</span>
                                </div>
                            </div>
                        </div>
                        <div id="row2" className="d-flex justify-content-between mt-3">
                            <div className="d-flex flex-column">
                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                <span style={{ fontSize: "24px" }} className="mb-1">{d.inUse}</span>
                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                            </div>
                            <div className="d-flex flex-column">
                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                <span style={{ fontSize: "24px" }} className="mb-1">{d.inStock}</span>
                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                            </div>
                            <div className="d-flex flex-column">
                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                <span style={{ fontSize: "24px" }} className="mb-1">{d.requested}</span>
                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>

        <div className="d-flex flex-column-fluid w-100" style={{ background: "#fafafa" }}>
            <div className="w-100">
                <div >
                    <div className="col-12" style={{ padding: "0px" }}>
                        <div className="card card-custom card-stretch card-shadowless">
                            <div className="card-header" style={{ borderBottom: "0" }}>
                                <div className="card-title d-flex flex-column justify-content-start align-items-start">
                                    <h4 style={{ fontWeight: "700" }}>Details</h4>
                                    <p style={{ color: "#9a9b9d", fontWeight: "normal" }}>Last updated {lastUpdatedAt}</p>
                                </div>
                                <div className="card-toolbar" style={{ gap: "10px" }}>
                                    <div style={{ position: "relative" }}>
                                        <div style={{ position: "absolute", left: "14px", top: "10px" }}>
                                            <HeaderSearchIcon svgStyle={{ stroke: "#e8e9eb" }} />
                                        </div>
                                        <input type="text" placeholder="Search for garment, floor or more..." style={{
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            borderRadius: "8px",
                                            border: "2px solid #e8e9eb",
                                            color: "#333",
                                            width: "280px",
                                            paddingLeft: "40px",
                                            outline: "none"
                                        }}
                                            value={searchKey}
                                            onChange={(e) => setSearchKey(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        data-toggle="collapse"
                                        data-target="#searchOptions"
                                        className="position-relative btn btn-primary  mr-2"
                                        style={{
                                            border: "1px solid #e8e9eb",
                                            borderRadius: "8px",
                                            color: "#000",
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "10px",
                                            paddingLeft: "18px",
                                            paddingRight: "18px",
                                            background: "#e8e9eb"
                                        }}
                                    >
                                        <FilterIcon />
                                        <span className="ml-3">
                                            Filter
                                        </span>
                                        {isFilteredApplied && <div className="position-absolute" style={{ top: 0, right: "1px", height: "10px", width: "10px", borderRadius: "50%", background: "red" }}></div>}
                                    </button>
                                </div>
                            </div>
                            <div className="card-body py-0" >
                                <div
                                    className="accordion accordion-solid accordion-toggle-plus"
                                    id="accordionExample6"
                                >
                                    <div
                                        id="searchOptions"
                                        className="collapse"
                                        data-parent="#accordionExample6"
                                    >
                                        <div>
                                            <form
                                                onSubmit={handleSubmit(onSearchHandler)}
                                                className="kt-form kt-form--fit mb-0"
                                            >
                                                <div className="row mb-6">
                                                    {InputFields.map((inputMain, index) => (
                                                        <SearchInput
                                                            key={inputMain.name + index + Math.ceil(Math.random())}
                                                            {...inputMain}
                                                            errors={errors}
                                                            register={register}
                                                        />
                                                    ))}
                                                </div>

                                                <SearchSubmitButton
                                                    handleSubmit={handleSubmit}
                                                    onSearchHandler={onSearchHandler}
                                                    onResetHandler={onResetHandler}
                                                />
                                            </form>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="dataTables_wrapper block-table mb-10">
                                    <Table
                                        currentSort={currentSort}
                                        sortingHandler={sortingHandler}
                                        mainData={tableData}
                                        tableHeading={Object.keys(OBJ_TABLE)}
                                        tableData={Object.values(OBJ_TABLE)}
                                        renderAs={{
                                            fillRate: (val) => Number(val).toFixed(2)
                                        }}
                                        links={[]}
                                        onlyDate={{
                                            createdAt: "date",
                                            startDate: "dateTime",
                                            endDate: "dateTime",
                                        }}
                                        dontShowSort={["SKU"]}
                                        toolTips={
                                            {
                                                SKU: "Fill rate = Requested - In use - Clean stock",
                                                Location: "Fill rate = Requested - In use - Clean stock",
                                                "Product name": "Fill rate = Requested - In use - Clean stock",
                                                "In use": "Fill rate = Requested - In use - Clean stock",
                                                "Last Washed": "Fill rate = Requested - In use - Clean stock",
                                                "Total Washed": "Fill rate = Requested - In use - Clean stock",
                                                "Next Wash cycle": "Fill rate = Requested - In use - Clean stock",
                                                "Status": "Fill rate = Requested - In use - Clean stock",
                                            }
                                        }
                                    />

                                    {perPage !== 0 && (
                                        <Pagination
                                            page={page || 1}
                                            totalDocuments={totalDocuments}
                                            getNewData={fetchMoreData}
                                            perPage={perPage}
                                            defaultPerPage={records_per_page}
                                            perPageChangeHandler={perPageChangeHandler}
                                            currentDocLength={tableData?.length}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default GarmentsComp;
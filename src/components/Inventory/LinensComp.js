import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
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
    "In use": "countInUse",
    "Clean stock": "cleanStock",
    "Par level": "parLevel",
    "Dirty return": "dirtyReturn",
    "Del. qty": "deliveredQuantity",
    "Fill rate": "fillRate"
};

const getSortingField = (sortBy) => {
    let finalSortField = sortBy;
    if (sortBy == "Location") {
        finalSortField = "location";
    } else if (sortBy == "Product name") {
        finalSortField = "productName";
    } else if (sortBy == "In use") {
        finalSortField = "countInUse"
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

const LinensComp = ({ activeTab, isDataAlreadyFetched, changeLinenStatus }) => {
    const [tableData, setTableData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "",
        order: "",
    });
    const [searchKey, setSearchKey] = useState(null);
    const [isFilteredApplied, setIsFiltersApplied] = useState(false);
    const [locationList, setLocationList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [lastUpdatedAt, setLastUpdatedAt] = useState([]);
    const [extraQueryString, setExtraQueryString] = useState("")

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

    const { request: requestLinensData, response: responseLinensData } = useRequest()
    const { request: requestLineansCards, response: responseLineansCards } = useRequest();

    const { request: requestProductList, response: responseProductList } = useRequest();
    const { request: requestLocationList, response: responseLocationList } = useRequest();

    const getData = (page=0, perPage=records_per_page, sortBy="location", order="desc", extras=extraQueryString) => {
        requestLinensData("get", `api/inventory/management?userId=${userId}&categoryId=1&size=${perPage}&page=${page}&orderByField=${sortBy}&ascending=${order == "asc"}${extras}`);
    }

    useEffect(() => {
        if (activeTab == "linens") {
            if (!isDataAlreadyFetched.card) {
                requestLineansCards("get", `api/inventory/get-summaryCard?userId=${userId}&categoryId=1&size=${records_per_page}&page=0`);
            }

            if (!isDataAlreadyFetched.table) {
                getData(0,records_per_page);
            }

            if (!isDataAlreadyFetched.filters.productName) {
                requestProductList("get", `api/product?categoryId=1`)
            }

            if (!isDataAlreadyFetched.filters.location) {
                requestLocationList("get", `api/floor?facilityId=${floorDetails.facilityId}&allData=false&categoryId=1`)
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
        if (responseLinensData) {
            changeLinenStatus({ ...isDataAlreadyFetched, table: true })
            const { inventoryDTOPage: { content, totalElements }, lastUpdatedDateTime } = responseLinensData;
            setTableData(content)
            setLastUpdatedAt(lastUpdatedDateTime)
            setTotalDocuments(totalElements)
        }
    }, [responseLinensData])

    useEffect(() => {
        if (responseLineansCards) {
            changeLinenStatus({ ...isDataAlreadyFetched, card: true })
            setCardData(responseLineansCards)
        }
    }, [responseLineansCards])


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
        let finalSortField = getSortingField(currentSort.sortBy);
        resetField("productName");
        resetField("location");
        setPage(0);
        getData(0,perPage, finalSortField,currentSort.order, "");
        setIsFiltersApplied(false);
        setExtraQueryString("")
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
            getData(0,perPage, finalSortField,newOrder,querySearchString);
            setCurrentSort({ sortBy, order: newOrder });
        } else {
            getData(0,perPage, finalSortField,currentSort.order,querySearchString);
            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
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
        getData(selected,perPage, finalSortField,currentSort.order,querySearchString);
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
        getData(0,event.target.value, finalSortField,currentSort.order);
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

    const filteredTableData = tableData?.filter((item) => {
        return (
            item.location.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
            item.productName.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
            item.sku.toLowerCase().includes(searchKey?.toLowerCase() || "")
        );
    });

    return <div id="linens" role="tabpanel" aria-labelledby="linens-tab" style={{ display: activeTab == "linens" ? "block" : "none" }}>
        {/*         CARDS        */}
        <div id="cards_parent swiper" className="mt-4">
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
                        <div id="row1" className="d-flex justify-content-between" style={{ gap: "10px" }}>
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
                                        <input type="text" placeholder="Search for linen, floor or more..." style={{
                                            paddingTop: "10px",
                                            paddingBottom: "10px",
                                            borderRadius: "8px",
                                            border: "2px solid #e8e9eb",
                                            color: "#333",
                                            width: "280px",
                                            paddingLeft: "40px",
                                            outline: "none"
                                        }}
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
                                        mainData={filteredTableData}
                                        tableHeading={Object.keys(OBJ_TABLE)}
                                        tableData={Object.values(OBJ_TABLE)}
                                        renderAs={{
                                            created_at: (val) => moment(val).format("DD-MM-YYYY"),
                                            fillRate: (val) => (
                                                <span style={{
                                                    color: val < 50 ? '#FB6464' : '#60BA51', 
                                                    backgroundColor: '#EFFFFA',            
                                                    padding: '7px',                        
                                                    borderRadius: '12px',                  
                                                    fontSize: '1.08rem',                      
                                                    fontWeight: '400',                     
                                                    display: 'inline-block',
                                                    textAlign: 'center'                   
                                                }}>
                                                {Number(val).toFixed(2)}%
                                            </span>)
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
                                                "SKU": "Fill rate = Requested - In use - Clean stock",
                                                "Fill rate": "Fill rate = Requested - In use - Clean stock",
                                                "Location": "Fill rate = Requested - In use - Clean stock",
                                                "Product name": "Fill rate = Requested - In use - Clean stock",
                                                "In use": "Fill rate = Requested - In use - Clean stock",
                                                "Clean stock": "Fill rate = Requested - In use - Clean stock",
                                                "Par level": "Fill rate = Requested - In use - Clean stock",
                                                "Dirty return": "Fill rate = Requested - In use - Clean stock",
                                                "Del. qty": "Fill rate = Requested - In use - Clean stock",
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

export default LinensComp;
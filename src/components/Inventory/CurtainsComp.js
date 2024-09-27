import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FilterIcon, HeaderSearchIcon, PencilIcon } from "../../util/Svg";
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
    SKU: "SKU",
    Location: "location",
    "Product name": "productName",
    "Installation Date": "installationDate",
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


const CurtainsComp = ({ activeTab, isDataAlreadyFetched, changeLinenStatus }) => {
    const [tableData, setTableData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "",
        order: "",
    });
    const [isFilteredApplied, setIsFiltersApplied] = useState(false);

    let { records_per_page } = useSelector((state) => state.setting);
    let { userId } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
        getValues
    } = useForm();

    const { request: requestCurtainsData, response: responseCurtainsData } = useRequest()
    const { request: requestCurtainsCards, response: responseCurtainsCards } = useRequest();

    useEffect(()=>{
        if (!records_per_page) {
            records_per_page = 10;
            setPerPage(10)
        } else {
            setPerPage(records_per_page)
        }
    },[records_per_page])

    useEffect(() => {
        if (activeTab == "curtains") {
            if (!isDataAlreadyFetched.card) {
                requestCurtainsCards("get", `api/inventory/get-summaryCard?userId=${userId}&categoryId=2&page=0&size=0`);
            }

            if (!isDataAlreadyFetched.table) {
                requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${10}&page=0`);
            }
        }
    }, [activeTab])

    useEffect(() => {
        if (responseCurtainsData) {
            changeLinenStatus({ ...isDataAlreadyFetched, table: true })
            // isDataAlreadyFetched.table = true;
            const { content, totalElements } = responseCurtainsData;
            setTableData(content)
            setTotalDocuments(totalElements)
        }
    }, [responseCurtainsData])

    useEffect(() => {
        if (responseCurtainsCards) {
            changeLinenStatus({ ...isDataAlreadyFetched, card: true })
            // isDataAlreadyFetched.card = true;
            setCardData(responseCurtainsCards)
        }
    }, [responseCurtainsCards])

    const onSearchHandler = () => {
        
        const { productName,location } = getValues();
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if(productName){
            querySearchString += `&productName=${productName}`
        }
        if(location){
            querySearchString += `&location=${location}`
        }
        requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${perPage}&page=${0}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc"}${querySearchString}`);
        setPage(0);
        setIsFiltersApplied(true)
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        let finalSortField = getSortingField(currentSort.sortBy);
        resetField("productName");
        resetField("location");
        setPage(0);
        requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${perPage}&page=${0}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc"}`);
        setIsFiltersApplied(false);
    };

    const sortingHandler = (sortBy) => {
        let finalSortField = getSortingField(sortBy);
        if (currentSort.sortBy === sortBy) {
            const newOrder = currentSort.order === "asc" ? "desc" : "asc";
            requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=3&size=${perPage}&page=${1}&orderByField=${finalSortField}&ascending=${newOrder == "asc" ? true : false}`);
            setCurrentSort({ sortBy, order: newOrder });
        } else {
            requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=3&size=${perPage}&page=${1}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc" ? true : false}`);
            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
        setPage(selected);
        requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${perPage}&page=${selected}`);
    };


    const perPageChangeHandler = (event) => {
        setPage(0);
        setPerPage(event.target.value);
        requestCurtainsData("get", `api/inventory/management?userId=${userId}&categoryId=2&size=${records_per_page}&page=1`);
    };

    const InputFields = [
        {
            label: "Product Name",
            name: "productName",
        },
        {
            label: "Location",
            name: "location",
        },
    ];

    return <div id="linens" role="tabpanel" aria-labelledby="linens-tab" style={{ display: activeTab == "curtains" ? "block" : "none" }}>
        {/*         CARDS        */}
        <div id="cards_parent" className="mt-4 mb-6">
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
                                <span style={{ fontSize: "18px" }}>Floor-{index + 1} (North)</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                    <span>35.71%</span>
                                </div>
                                <PencilIcon />
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
                                    <p style={{ color: "#9a9b9d", fontWeight: "normal" }}>Last updated 10:30pm 02/07/2024</p>
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
                                        }} />
                                    </div>
                                    <button
                                        data-toggle="collapse"
                                        data-target="#searchOptions3"
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
                                        {isFilteredApplied && <div className="position-absolute" style={{top: 0, right: "1px",height: "10px", width: "10px", borderRadius: "50%",background: "red"}}></div>}
                                    </button>
                                </div>
                            </div>
                            <div className="card-body py-0" >
                                <div
                                    className="accordion accordion-solid accordion-toggle-plus"
                                    id="accordionExample8"
                                >
                                    <div
                                        id="searchOptions3"
                                        className="collapse"
                                        data-parent="#accordionExample8"
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
                                            created_at: (val) => moment(val).format("DD-MM-YYYY"),
                                        }}
                                        links={[]}
                                        onlyDate={{
                                            createdAt: "date",
                                            startDate: "dateTime",
                                            endDate: "dateTime",
                                        }}
                                        dontShowSort={["name"]}
                                    />

                                    {perPage !== 0 && (
                                        <Pagination
                                            page={page}
                                            totalDocuments={totalDocuments}
                                            getNewData={fetchMoreData}
                                            perPage={perPage}
                                            defaultPerPage={records_per_page}
                                            perPageChangeHandler={perPageChangeHandler}
                                            currentDocLength={tableData.length}
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

export default CurtainsComp;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { EyeIcon, FilterIcon, HeaderSearchIcon, PencilIcon, PlusIcon, RoleIcon } from "../../util/Svg";
import { useForm } from "react-hook-form";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { SearchInput, SearchSubmitButton } from "../../components/Form/Form";
import cardStyles from "../../styles/card.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../styles/slider.css"

const OBJ_TABLE = {
    "User ID": "userId",
    "User details": "userDetails",
    "Role": "role",
    "Location": "location",
    "Created date": "createdDate",
    "Last login": "lastLogin",
    "Created by": "createdBy",
    "Status": "status"
};

// const getSortingField = (sortBy) => {
//     let finalSortField = sortBy;
//     if (sortBy == "Location") {
//         finalSortField = "location";
//     } else if (sortBy == "Product name") {
//         finalSortField = "productName";
//     } else if (sortBy == "In use") {
//         finalSortField = "countInUse"
//     } else if (sortBy == "Clean stock") {
//         finalSortField = "cleanStock"
//     } else if (sortBy == "Par level") {
//         finalSortField = "parLevel"
//     } else if (sortBy == "Dirty return") {
//         finalSortField = "dirtyReturn"
//     } else if (sortBy == "Del. qty") {
//         finalSortField = "deliveredQuantity"
//     } else if (sortBy == "Fill rate") {
//         finalSortField = "fillRate"
//     } else if (sortBy == "Last Washed") {
//         finalSortField = "lastWashed"
//     } else if (sortBy == "Total Washed") {
//         finalSortField = "totalWashed"
//     } else if (sortBy == "Next Wash cycle") {
//         finalSortField = "nextWashCycle"
//     } else if (sortBy == "Status") {
//         finalSortField = "status"
//     } else if (sortBy == "Installation Date") {
//         finalSortField = "installationDate"
//     }

//     return finalSortField;
// }

const tableData = [
    {
        userId: "#158ARD",
        userDetails:{name: "Cristian Bale",email: "Cris_bale@email.com", image: "Avatar.png"},
        role: "Services",
        location: "Floor 1 - 2",
        createdDate: "Sept 12, 2023",
        lastLogin: "Sept 12, 2023 10:48 AM",
        createdBy:{name: "Joseph Trifler",email: "Joseph_Trif@email.com", image: "Avatar.png"},
        status: true
    },
    {
        userId: "#158ARD",
        userDetails:{name: "Cristian Bale",email: "Cris_bale@email.com", image: "Avatar (2).png"},
        role: "Services",
        location: "Floor 1 - 2",
        createdDate: "Sept 12, 2023",
        lastLogin: "Sept 12, 2023 10:48 AM",
        createdBy:{name: "Joseph Trifler",email: "Joseph_Trif@email.com", image: "Avatar (2).png"},
        status: true
    },
    {
        userId: "#158ARD",
        userDetails:{name: "Cristian Bale",email: "Cris_bale@email.com", image: "Avatar (3).png"},
        role: "Services",
        location: "Floor 1 - 2",
        createdDate: "Sept 12, 2023",
        lastLogin: "Sept 12, 2023 10:48 AM",
        createdBy:{name: "Joseph Trifler",email: "Joseph_Trif@email.com", image: "Avatar (3).png"},
        status: true
    },
];
const userRoles = [
    { name: "Admin" }, 
    { name: "Warehouse" }, 
    { name: 'Services' },
    { name: 'Floor manager' },
];
const totalDocuments = 0;

const Index = () => {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "",
        order: "",
    });
    // const [searchKey, setSearchKey] = useState(null);
    const [isFiltersApplied, setIsFiltersApplied] = useState(false);

    let { records_per_page } = useSelector((state) => state.setting);


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





    const onSearchHandler = () => {
        const { productName, location } = getValues();
        if (productName) {
            //querySearchString += `&productName=${productName}`
        }
        if (location) {
            //querySearchString += `&location=${location}`
        }

        setPage(0);
        setIsFiltersApplied(true)
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        //let finalSortField = getSortingField(currentSort.sortBy);
        resetField("productName");
        resetField("location");
        setPage(0);
        setIsFiltersApplied(false);
    };

    const sortingHandler = (sortBy) => {
        //let finalSortField = getSortingField(sortBy);
        if (currentSort.sortBy == sortBy) {
            const newOrder = currentSort.order === "asc" ? "desc" : "asc";
            setCurrentSort({ sortBy, order: newOrder });
        } else {
            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
        console.log("selected : ", selected)
        setPage(selected + 1);
    };


    const perPageChangeHandler = (event) => {
        setPage(0);
        setPerPage(event.target.value);
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

    const deleteHandler = () => {}

    const filteredTableData = tableData?.filter(() => {
        return true;
    });

    return <div
        className="content  d-flex flex-column flex-column-fluid"
        id="kt_content"

        style={{ background: "#fafafa" }}
    >
        <div
            className="subheader py-4 py-lg-4 subheader-solid "
            id="kt_subheader"
            style={{ position: "relative", top: "0px", left: "0px" }}
        >
            <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3">
                    <div className="d-flex align-items-baseline flex-wrap mr-5">
                        <h4 className="text-dark font-weight-bold my-1 mr-5">
                            Roles & Permissions
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-content">
            <div>
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
                        {Array.isArray(userRoles) && userRoles.map((role, index) => {
                            return <SwiperSlide key={index + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #C6C9CE", borderRadius: "10px" }}>
                                <div id="row1" className="d-flex justify-content-between align-items-center" style={{ gap: "10px" }}>
                                    <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                                        <RoleIcon />
                                        <span style={{ fontSize: "18px", textTransform: "capitalize" }}>{role.name}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <PencilIcon />
                                    </div>
                                </div>
                                <div id="row2" className="d-flex mt-3 align-items-center" style={{ gap: "10px" }}>
                                    <div className="d-flex flex-row">
                                        <div className="p-1">
                                            <img src="/Avatar.png" alt="Avatar Img" />
                                        </div>
                                        <div className="p-1" style={{ marginLeft: "-18px" }}>
                                            <img src="/Avatar (1).png" alt="Avatar Img" />
                                        </div>
                                        <div className="p-1" style={{ marginLeft: "-18px" }}>
                                            <img src="/Avatar (2).png" alt="Avatar Img" />
                                        </div>
                                        <div className="p-1" style={{ marginLeft: "-18px" }}>
                                            <img src="/Avatar (3).png" alt="Avatar Img" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span>+5 others</span>
                                    </div>
                                </div>
                                <div id="row3" className="mt-4">
                                    <button
                                        data-toggle="collapse"
                                        data-target="#searchOptions"
                                        className="position-relative btn btn-primary  mr-2"
                                        style={{
                                            border: "1px solid #289A77",
                                            borderRadius: "8px",
                                            color: "#289A77",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "10px",
                                            paddingLeft: "18px",
                                            paddingRight: "18px",
                                            background: "transparent",
                                            width: "100%",
                                        }}
                                    >
                                        <EyeIcon />
                                        <span className="ml-3">
                                            Add new user
                                        </span>
                                    </button>
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
                                    <div className="card-header align-items-center" style={{ borderBottom: "0" }}>
                                        <div className="card-title d-flex flex-column justify-content-start align-items-start">
                                            <h4 style={{ fontWeight: "700" }}>User management</h4>
                                        </div>
                                        <div className="card-toolbar" style={{ gap: "10px" }}>
                                            <div style={{ position: "relative" }}>
                                                <div style={{ position: "absolute", left: "14px", top: "10px" }}>
                                                    <HeaderSearchIcon svgStyle={{ stroke: "#e8e9eb" }} />
                                                </div>
                                                <input type="text" placeholder="Search for user..." style={{
                                                    paddingTop: "10px",
                                                    paddingBottom: "10px",
                                                    borderRadius: "8px",
                                                    border: "2px solid #e8e9eb",
                                                    color: "#333",
                                                    width: "280px",
                                                    paddingLeft: "40px",
                                                    outline: "none"
                                                }}
                                                    // onChange={(e) => setSearchKey(e.target.value)}
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
                                                {isFiltersApplied && <div className="position-absolute" style={{ top: 0, right: "1px", height: "10px", width: "10px", borderRadius: "50%", background: "red" }}></div>}
                                            </button>

                                            <button
                                                data-toggle="collapse"
                                                data-target="#searchOptions"
                                                className="position-relative btn btn-primary  mr-2"
                                                style={{
                                                    border: "1px solid #39D9A7",
                                                    borderRadius: "8px",
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "10px",
                                                    paddingLeft: "18px",
                                                    paddingRight: "18px",
                                                    background: "#39D9A7"
                                                }}
                                            >
                                                <PlusIcon />
                                                <span className="ml-3">
                                                    Add new user
                                                </span>
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
                                                    fillRate: (val) => Number(val).toFixed(2)
                                                }}
                                                links={[
                                                    {
                                                        isLink: true,
                                                        to: "/candidate/edit",
                                                        name: "Edit",
                                                        extraData: true,
                                                        key: ["10_4"],
                                                      },
                                                      {
                                                        isLink: false,
                                                        name: "Delete",
                                                        click: deleteHandler,
                                                        key: ["10_5"],
                                                      },
                                                ]}
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
                                                    page={page}
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
        </div>
    </div>
}

export default Index;
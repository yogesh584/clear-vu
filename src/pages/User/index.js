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
import ViewPermissionModal from "../../components/User/ViewPermissionModal";
import AddNewUserModal from "../../components/User/AddNewUserModal";
import EditUserModal from "../../components/User/EditUserModal";
import DeleteModal from "../../components/CommonModals/DeleteModal";
import useRequest from "../../hooks/useRequest";

const OBJ_TABLE = {
    "User ID": "userId",
    "User details": "userDetails",
    "Role": "role",
    "Location": "location",
    "Created date": "createdDate",
    "Last login": "dateTime",
    "Created by": "createdBy",
    "Status": "status"
};

const getSortingField = (sortBy) => {
    let finalSortField = sortBy;
    if (sortBy == "User ID") {
        finalSortField = "userId";
    } else if (sortBy == "User details") {
        finalSortField = "userName"
    } else if (sortBy == "Location") {
        finalSortField = "location"
    } else if (sortBy == "Created by") {
        finalSortField = "createdBy"
    } else if (sortBy == "Last login") {
        finalSortField = "lastLogin"
    } else if (sortBy == "Created date") {
        finalSortField = "createdAt"
    }

    return finalSortField;
}

const Index = () => {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "createdAt",
        order: "desc",
    });
    const [searchKey, setSearchKey] = useState(null);
    const [isFiltersApplied, setIsFiltersApplied] = useState(false);
    const [tableData, setTableData] = useState([])
    const [userRoles, setUserRoles] = useState([])
    const [locationList, setLocationList] = useState([])

    /*      MODAL HANDLING STATES        */
    const [isShowPermissionsModal, setIsShowPermissionsModal] = useState(false);
    const showPermissionsModal = () => setIsShowPermissionsModal(true)
    const closePermissionsModal = () => setIsShowPermissionsModal(false)

    const [isShowAddNewUserModal, setIsShowAddNewUserModal] = useState(false);
    const showAddNewUserModal = () => setIsShowAddNewUserModal(true)
    const closeAddNewUserModal = () => setIsShowAddNewUserModal(false)

    const [isShowEditUserModal, setIsShowEditUserModal] = useState(false);
    const [editModalContent, setEditModalContent] = useState({});
    const showEditUserModal = () => setIsShowEditUserModal(true)
    const closeEditUserModal = () => {setIsShowEditUserModal(false); setEditModalContent({})}

    const [isShowDeleteUserModal, setIsShowDeleteUserModal] = useState(false);
    const showDeleteUserModal = () => setIsShowDeleteUserModal(true)
    const closeDeleteUserModal = () => setIsShowDeleteUserModal(false)


    /*      REQUESTS         */
    const { request: requestUserList, response: responseUserList } = useRequest()
    const { request: requestUserRoleList, response: responseUserRoleList } = useRequest()
    const { request: requestLocationList, response: responseLocationList } = useRequest()
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


    useEffect(() => {
        document.title = "User Managment - ClearVu-IQ";
        requestUserList("get", `api/admin/users-list?userId=${userId}&page=${page}&pageSize=${records_per_page}`)
        requestUserRoleList("get", `api/admin/rolecard?userId=${userId}`)
        requestLocationList("get", `api/floor?facilityId=${floorDetails.facilityId}`)
    }, [userId])

    useEffect(() => {
        if (responseUserRoleList) {
            const { data } = responseUserRoleList;
            setUserRoles(data);
        }
    }, [responseUserRoleList])

    useEffect(() => {
        if (responseLocationList) {
            setLocationList(responseLocationList)
        }
    }, [responseLocationList])

    useEffect(() => {
        if (responseUserList) {
            const { data, responseCode } = responseUserList;
            if (responseCode == "SGEN001") {
                const parsedData = data.usersListingDTOList.map(d => ({
                    ...d,
                    userId: "#" + d.userId,
                    role: Array.isArray(d.role) && d.role.length > 0 ? d.role[0] : "-",
                    userDetails: {
                        name: d.userName ?? "-",
                        hasImage: d.userImage ? true : false,
                        image: d.userImage ? d.userImage : d.userName.length > 0 ? d.userName[0] : "-",
                        email: d.emailId
                    },
                    location: "-",
                    createdDate: d.createdDate && new Date(d.createdDate) instanceof Date ? moment(d.createdDate).format('MMM D, YYYY') : "-",
                    dateTime: d.lastLogin,
                    createdBy: {
                        name: d.createdBy,
                        hasImage: d.createdByImage ? true : false,
                        image: d.createdByImage ? d.createdByImage : d.createdBy.length > 0 ? d.createdBy[0] : "-",
                        email: d.createdByEmail ?? "-",
                    }
                }))
                setTableData(parsedData);
                setTotalDocuments(data.totalCount)
            }
        }
    }, [responseUserList])


    const onSearchHandler = () => {
        const { role, status, location } = getValues();
        console.log("currentSort.sortBy", currentSort.sortBy)
        let finalSortField = getSortingField(currentSort.sortBy);
        let querySearchString = "";
        if (role) {
            querySearchString += `&role=${role}`
        }
        if (status) {
            querySearchString += `&status=${status}`
        }
        if (location) {
            querySearchString += `&location=${location}`
        }
        requestUserList("get", `api/admin/users-list?userId=${userId}&page=${0}&pageSize=${perPage}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc"}${querySearchString}`)

        setPage(0);
        setIsFiltersApplied(true)
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        let finalSortField = getSortingField(currentSort.sortBy);
        requestUserList("get", `api/admin/users-list?userId=${userId}&page=${0}&pageSize=${perPage}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc"}`)
        resetField("role");
        resetField("location");
        resetField("status");
        setPage(0);
        setIsFiltersApplied(false);
    };

    const sortingHandler = (sortBy) => {
        let finalSortField = getSortingField(sortBy);
        if (currentSort.sortBy == sortBy) {
            const newOrder = currentSort.order === "asc" ? "desc" : "asc";
            setCurrentSort({ sortBy, order: newOrder });
            requestUserList("get", `api/admin/users-list?userId=${userId}&page=${0}&pageSize=${perPage}&orderByField=${finalSortField}&ascending=${newOrder == "asc"}`)
        } else {
            requestUserList("get", `api/admin/users-list?userId=${userId}&page=${0}&pageSize=${perPage}&orderByField=${finalSortField}&ascending=${currentSort.order == "asc"}`)
            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
        setPage(selected + 1);
        requestUserList("get", `api/admin/users-list?userId=${userId}&page=${selected}&pageSize=${perPage}`)
    };


    const perPageChangeHandler = (event) => {
        setPage(0);
        setPerPage(event.target.value);
        requestUserList("get", `api/admin/users-list?userId=${userId}&page=${0}&pageSize=${event.target.value}`)

    };

    const InputFields = [
        {
            label: "Role",
            name: "role",
            isSelectInput: true,
            children: <>
                <option value={""}>Please Select Role</option>
                <option value={"1"}>User</option>
                <option value={"2"}>Admin</option>
            </>
        },
        {
            label: "Location",
            name: "location",
            isSelectInput: true,
            children: <>
                    <option value={"0"}>Please Select Location</option>
                {
                    locationList.map((d,i) => (
                        <option value={d.floorId} key={i}>{d.floorName}</option>
                    ))
                }
            </>
        },
        {
            label: "Status",
            name: "status",
            isSelectInput: true,
            children: <>
                <option value={""}>Please Select Status</option>
                <option value={"1"}>Active</option>
                <option value={"0"}>Inactive</option>
            </>
        }
    ];

    const deleteHandler = () => {
        showDeleteUserModal()
    }

    const filteredTableData = tableData?.filter((u) => {
        return (
            u.userDetails.name?.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
            u.userDetails.email?.toLowerCase().includes(searchKey?.toLowerCase() || "") ||
            u.userDetails.location?.toLowerCase().includes(searchKey?.toLowerCase() || "")
        );
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
                                        <span style={{ fontSize: "18px", textTransform: "capitalize" }}>{role.roleName}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <PencilIcon />
                                    </div>
                                </div>
                                <div id="row2" className="d-flex mt-3 align-items-center" style={{ gap: "10px" }}>
                                    <div className="d-flex flex-row">
                                        {
                                            Array.isArray(role.userRoleDetail) && role.userRoleDetail.slice(0, 5).map((roleDetail, index) => {
                                                if (roleDetail.userImage) {
                                                    return <div className="p-1" key={roleDetail.email + index} style={{ marginLeft: index == 0 ? "0px" : "-13px" }}>
                                                        <img src={roleDetail.userImage} alt="AI" />
                                                    </div>
                                                } else {
                                                    return <div className="symbol symbol-30 symbol-circle symbol-primary" style={{marginLeft:index == 0 ? "0px" : "-13px", border: "1px solid #fff"}} key={roleDetail.email + index}>
                                                        <span className="symbol-label" style={{ textTransform: "uppercase" }}>{roleDetail.username[0]}</span>
                                                    </div>
                                                }
                                            })
                                        }
                                    </div>
                                    {role.totalCount > 5 && <div className="d-flex flex-column">
                                        <span>+{role.totalCount - 5} others</span>
                                    </div>}
                                </div>
                                <div id="row3" className="mt-4">
                                    <button
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
                                        onClick={showPermissionsModal}
                                    >
                                        <EyeIcon />
                                        <span className="ml-3">
                                            View permissions
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
                                                {isFiltersApplied && <div className="position-absolute" style={{ top: 0, right: "1px", height: "10px", width: "10px", borderRadius: "50%", background: "red" }}></div>}
                                            </button>

                                            <button
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
                                                onClick={showAddNewUserModal}
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
                                                        isLink: false,
                                                        name: "Edit",
                                                        extraData: true,
                                                        key: ["10_4"],
                                                        click : (v, data) => {
                                                            showEditUserModal();
                                                            setEditModalContent(data)
                                                        }
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
                                                dontShowSort={["Role", "Status"]}
                                                toolTips={
                                                    {
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
        </div>
        <ViewPermissionModal show={isShowPermissionsModal} onHide={closePermissionsModal}/>
        <AddNewUserModal show={isShowAddNewUserModal} onHide={closeAddNewUserModal}/>
        <EditUserModal show={isShowEditUserModal} onHide={closeEditUserModal} data={editModalContent} />
        <DeleteModal show={isShowDeleteUserModal} onHide={closeDeleteUserModal} headingText="Delete User" bodyText={"Are you sure you want to delete this user ?"} onClickFunc={()=>{}}/>
    </div>
}

export default Index;
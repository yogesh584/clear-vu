import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Table from "../../components/Table/Table";
import { SearchInput, SearchSubmitButton } from "../../components/Form/Form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isHaveAccess } from "../../util/fn";
import { useForm } from "react-hook-form";
import moment from "moment";
import { FilterIcon, HeaderSearchIcon } from "../../util/Svg";


const OBJ_TABLE = {
    SKU: "SKU",
    Location: "location",
    "Product name": "productName",
    "In use": "inUse",
    "Clean stock": "cleanStock",
    "Par level": "parLevel",
    "Dirty return": "dirtyReturn",
    "Del. qty": "delQty",
    "Fill rate": "fillRate"
};

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [totalDocuments, setTotalDocuments] = useState(10);
    const [perPage, setPerPage] = useState(2);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "created on",
        order: "desc",
    });

    const { records_per_page } = useSelector((state) => state.setting);
    const { permissions, user_role_id } = useSelector((store) => store.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
        getValues,
    } = useForm();

    const onSearchHandler = (data) => {
        const { title } = getValues();
        setPage(1);
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        resetField("title");

        setPage(1);
    };

    const sortingHandler = (sortBy) => {
        if (currentSort.sortBy == sortBy) {
            const newOrder = currentSort.order === "asc" ? "desc" : "asc";

            setCurrentSort({ sortBy, order: newOrder });
        } else {

            setCurrentSort({ sortBy, order: "desc" });
        }
    };

    const fetchMoreData = ({ selected }) => {
        setPage(selected + 1);
    };


    const perPageChangeHandler = (event) => {
        setPage(1);
        setPerPage(event.target.value);
    };

    useEffect(() => {
        document.title = "Inventory Managment - Clear vu";
    }, []);

    const InputFields = [
        {
            label: "Title",
            name: "title",
        }
    ];


    return (
        <>
            <div
                className="content  d-flex flex-column flex-column-fluid"
                id="kt_content"
                style={{ background: "#fafafa" }}
            >
                <div
                    className="subheader py-2 py-lg-4 subheader-solid "
                    id="kt_subheader"
                >
                    <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                        <div className="d-flex align-items-center flex-wrap mr-1">
                            <div className="d-flex align-items-baseline flex-wrap mr-5">
                                <h4 className="text-dark font-weight-bold my-1 mr-5">
                                    Inventory management
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column-fluid" style={{ background: "#fafafa" }}>
                    <div className=" container ">
                        <div className="row">
                            <div className="col-12" style={{ padding: "0px" }}>
                                <div className="card card-custom card-stretch card-shadowless">
                                    <div className="card-header" style={{ borderBottom: "0" }}>
                                        <div className="card-title d-flex flex-column justify-content-start">
                                            <h5>Details</h5>
                                            <p style={{ color: "#9a9b9d", fontWeight: "normal" }}>Last updated 10:30pm 02/07/2024</p>
                                        </div>
                                        <div className="card-toolbar">
                                            <div style={{ position: "relative" }}>
                                                <div style={{ position: "absolute", left: "14px", top: "10px" }}>
                                                    <HeaderSearchIcon svgStyle={{ fill: "#e8e9eb" }} />
                                                </div>
                                                <input type="text" className="mr-3 " placeholder="Search for linen, floor or more..." style={{
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
                                            <a
                                                className="btn btn-primary  mr-2" // dropdown-toggle
                                                // data-toggle="collapse"
                                                // data-target="#collapseOne6"
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
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body py-0" >
                                        <div
                                            className="accordion accordion-solid accordion-toggle-plus"
                                            id="accordionExample6"
                                        >
                                            <div
                                                id="collapseOne6"
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
                                                                    key={index}
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
                                                mainData={[
                                                    {
                                                        SKU: '071',
                                                        location: 'Floor 1 (West)',
                                                        productName: 'Bedsheet',
                                                        inUse: 100,
                                                        cleanStock: 56,
                                                        parLevel: 56,
                                                        dirtyReturn: 56,
                                                        delQty: 56,
                                                        fillRate: '35.71%'
                                                    },
                                                    {
                                                        SKU: '157',
                                                        location: 'Floor 1 (West)',
                                                        productName: 'Pillow covers',
                                                        inUse: 86,
                                                        cleanStock: 56,
                                                        parLevel: 56,
                                                        dirtyReturn: 56,
                                                        delQty: 56,
                                                        fillRate: '100%'
                                                    },
                                                    {
                                                        SKU: '012',
                                                        location: 'Floor 1 (West)',
                                                        productName: 'Blankets',
                                                        inUse: 86,
                                                        cleanStock: 56,
                                                        parLevel: 56,
                                                        dirtyReturn: 56,
                                                        delQty: 56,
                                                        fillRate: '35.71%'
                                                    },
                                                    {
                                                        SKU: '018',
                                                        location: 'Floor 1 (West)',
                                                        productName: 'Inner sheet',
                                                        inUse: 86,
                                                        cleanStock: 56,
                                                        parLevel: 56,
                                                        dirtyReturn: 56,
                                                        delQty: 56,
                                                        fillRate: '35.71%'
                                                    },
                                                    {
                                                        SKU: '142',
                                                        location: 'Floor 1 (West)',
                                                        productName: 'Bath towel',
                                                        inUse: 86,
                                                        cleanStock: 56,
                                                        parLevel: 56,
                                                        dirtyReturn: 56,
                                                        delQty: 56,
                                                        fillRate: '35.71%'
                                                    }
                                                ]}
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
                                                    totalDocuments={20}
                                                    getNewData={fetchMoreData}
                                                    perPage={perPage}
                                                    defaultPerPage={records_per_page}
                                                    perPageChangeHandler={perPageChangeHandler}
                                                    currentDocLength={[
                                                        {
                                                            SKU: '071',
                                                            location: 'Floor 1 (West)',
                                                            productName: 'Bedsheet',
                                                            inUse: 100,
                                                            cleanStock: 56,
                                                            parLevel: 56,
                                                            dirtyReturn: 56,
                                                            delQty: 56,
                                                            fillRate: '35.71%'
                                                        },
                                                        {
                                                            SKU: '157',
                                                            location: 'Floor 1 (West)',
                                                            productName: 'Pillow covers',
                                                            inUse: 86,
                                                            cleanStock: 56,
                                                            parLevel: 56,
                                                            dirtyReturn: 56,
                                                            delQty: 56,
                                                            fillRate: '100%'
                                                        },
                                                        {
                                                            SKU: '012',
                                                            location: 'Floor 1 (West)',
                                                            productName: 'Blankets',
                                                            inUse: 86,
                                                            cleanStock: 56,
                                                            parLevel: 56,
                                                            dirtyReturn: 56,
                                                            delQty: 56,
                                                            fillRate: '35.71%'
                                                        },
                                                        {
                                                            SKU: '018',
                                                            location: 'Floor 1 (West)',
                                                            productName: 'Inner sheet',
                                                            inUse: 86,
                                                            cleanStock: 56,
                                                            parLevel: 56,
                                                            dirtyReturn: 56,
                                                            delQty: 56,
                                                            fillRate: '35.71%'
                                                        },
                                                        {
                                                            SKU: '142',
                                                            location: 'Floor 1 (West)',
                                                            productName: 'Bath towel',
                                                            inUse: 86,
                                                            cleanStock: 56,
                                                            parLevel: 56,
                                                            dirtyReturn: 56,
                                                            delQty: 56,
                                                            fillRate: '35.71%'
                                                        }
                                                    ].length}
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
        </>
    );
};

export default Dashboard;

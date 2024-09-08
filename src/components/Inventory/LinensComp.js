import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { FilterIcon, HeaderSearchIcon, PencilIcon } from "../../util/Svg";
import { useForm } from "react-hook-form";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import { SearchInput, SearchSubmitButton } from "../Form/Form";
import cardStyles from "../../styles/card.module.css"


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

const LinensComp = () => {
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

    const InputFields = [
        {
            label: "Title",
            name: "title",
        }
    ];

    return <div id="linens" role="tabpanel" aria-labelledby="linens-tab">
    {/*         CARDS        */}
    <div id="cards_parent" className="mt-4 mb-6">
        <div id="cards" className="d-flex w-100 px-3 justify-content-between">
            <div id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", width: "32%", borderRadius: "10px" }}>
                <div id="row1" className="d-flex justify-content-between">
                    <div>
                        <span style={{ fontSize: "18px" }}>Floor-1 (North)</span>
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
                        <span style={{ fontSize: "24px" }} className="mb-1">108</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">42</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">66</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                </div>
            </div>
            <div id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", width: "32%", borderRadius: "10px" }}>
                <div id="row1" className="d-flex justify-content-between">
                    <div>
                        <span style={{ fontSize: "18px" }}>Floor-2 (North)</span>
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
                        <span style={{ fontSize: "24px" }} className="mb-1">108</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">42</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">66</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                </div>
            </div>
            <div id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #60ba51", width: "32%", borderRadius: "10px" }}>
                <div id="row1" className="d-flex justify-content-between">
                    <div>
                        <span style={{ fontSize: "18px" }}>Floor-3 (North)</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#60ba51", border: "1px solid #60ba51" }}>
                            <span>100%</span>
                        </div>
                        <PencilIcon />
                    </div>
                </div>
                <div id="row2" className="d-flex justify-content-between mt-3">
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">42</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">42</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                    <div className="d-flex flex-column">
                        <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                        <span style={{ fontSize: "24px" }} className="mb-1">66</span>
                        <a style={{ color: "#39D9A7" }}>View</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
            <div className="rounded-pill mr-2" style={{ height: "10px", width: "25px", background: "#39d9a7" }}></div>
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
            <div className="rounded-circle mr-2" style={{ height: "10px", width: "10px", background: "#e8e9eb" }}></div>
        </div>
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
}

export default LinensComp;
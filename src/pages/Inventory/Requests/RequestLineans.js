import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Pagination from "../../../components/Pagination/Pagination";
import Table from "../../../components/Table/Table";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { InfoIcon } from "../../../util/Svg";

const OBJ_TABLE = {
    "Item name": "itemName",
    "In use": "inUse",
    "Par level": "parLevel",
    "Order QTY": "orderQty",
    "Request (AI Predicted)": "requestData"
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
const totalDocuments = 0;

const tableData = [];

const RequestLineans = () => {
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [currentSort, setCurrentSort] = useState({
        sortBy: "",
        order: "",
    });
    let { records_per_page } = useSelector((state) => state.setting);

    useEffect(() => {
        if (!records_per_page) {
            records_per_page = 10;
            setPerPage(10)
        } else {
            setPerPage(records_per_page)
        }
    }, [records_per_page])


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


    const filteredTableData = tableData?.filter(() => {
        return true;
    });

    return <div
        className="content  d-flex flex-column flex-column-fluid"
        id="kt_content"

        style={{ background: "#fafafa" }}
    >
        <div className="tab-content">
            <div>

                <div className="d-flex flex-column-fluid w-100" style={{ background: "#fafafa" }}>
                    <div className="w-100">
                        <div >
                            <div className="col-12" style={{ padding: "0px" }}>
                                <div className="card card-custom card-stretch card-shadowless">
                                    <div className="card-header align-items-center" style={{ borderBottom: "0" }}>
                                        <div className="card-title d-flex flex-row justify-content-start align-items-start" style={{gap: "9px"}}>
                                            <h4 style={{ fontWeight: "700" }}>Request linens</h4>
                                            <OverlayTrigger
                                                delay={{ hide: 450, show: 300 }}
                                                overlay={(props) => (
                                                    <Tooltip {...props}>
                                                        {"Your order will be placed on Wednesday July 23, 2024 | 08:00 AM"}
                                                    </Tooltip>
                                                )}
                                                placement="bottom"
                                            >
                                                <span>
                                                    <InfoIcon />
                                                </span>
                                            </OverlayTrigger>

                                        </div>
                                    </div>
                                    <div className="card-body py-0" >
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

                                                ]}
                                                onlyDate={{
                                                    createdAt: "date",
                                                    startDate: "dateTime",
                                                    endDate: "dateTime",
                                                }}
                                                dontShowSort={["SKU"]}
                                                toolTips={
                                                    {
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

export default RequestLineans;
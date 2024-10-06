import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ChangeRoomIcon, InfoIcon } from "../../../util/Svg";
import Select from 'react-select';

import { useFieldArray, useForm } from "react-hook-form";

const RequestLineans = () => {

    const { control } = useForm({
        defaultValues: {
            lineans: [
                {
                    name: "",
                    inUse: 0,
                    parLevel: 0,
                    orderQty: 0,
                    suggested: 0
                }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "lineans"
    })

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
                                        <div className="card-title d-flex flex-row justify-content-start align-items-start" style={{ gap: "9px" }}>
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
                                            <div className="table-responsive">
                                                <table
                                                    className="table dataTable table-head-custom table-head-bg table-borderless table-vertical-center"
                                                    id="taskTable"
                                                >
                                                    <thead>
                                                        <tr style={{ whiteSpace: "nowrap" }}>
                                                            <th className="py-4">Item name</th>
                                                            <th className="py-4">In use</th>
                                                            <th className="py-4">Par level</th>
                                                            <th className="py-4">Order QTY</th>
                                                            <th className="py-4">Suggested (AI Predicted)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fields.map((data, index) => {
                                                            console.log("data : ", data)
                                                            return <tr key={index + "__"}>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            <Select
                                                                                placeholder="Select item name"
                                                                                inputId="userRole"
                                                                                options={[
                                                                                    { label: "Option 1", value: "1" },
                                                                                    { label: "Option 2", value: "2" },
                                                                                    { label: "Option 3", value: "3" },
                                                                                    { label: "Option 4", value: "4" },
                                                                                ]}
                                                                                components={{
                                                                                    IndicatorSeparator: () => null,
                                                                                }}
                                                                                styles={{
                                                                                    control: (provided) => ({
                                                                                        ...provided,
                                                                                        borderRadius: '8px',
                                                                                        border: '2px solid #e6e8ea',
                                                                                        backgroundColor: '#fff',
                                                                                        letterSpacing: '0.03em',
                                                                                        textTransform: "capitalize",
                                                                                        padding: "0.1rem",
                                                                                        fontSize: "11px",
                                                                                        minWidth: "200px"
                                                                                    }),
                                                                                    option: (provided, { isDisabled, isFocused, isSelected }) => ({
                                                                                        ...provided,
                                                                                        backgroundColor: isSelected
                                                                                            ? "#39d9a7"
                                                                                            : isFocused
                                                                                                ? "#39d9a7"
                                                                                                : "white",
                                                                                        color: isSelected || isFocused ? "#fff" : "#000",
                                                                                        cursor: isDisabled ? "not-allowed" : "pointer",
                                                                                        textTransform: "capitalize"
                                                                                    }),
                                                                                    menu: (provided) => ({
                                                                                        ...provided,
                                                                                        borderRadius: '8px',
                                                                                        border: "1px solid #e6e8ea",
                                                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                                                    }),
                                                                                }}
                                                                                menuPlacement="auto"
                                                                                menuPosition="fixed"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            {data.inUse}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            {data.parLevel}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            {data.orderQty}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg d-flex align-items-center" style={{ gap: "9px" }}>
                                                                            <div className="py-2 px-5" style={{ borderRadius: "12px", border: "1px solid #39D9A7", color: "#39D9A7" }}>
                                                                                {data.suggested}
                                                                            </div>
                                                                            <button className="border-0 bg-transparent" onClick={() => { remove(index) }}>
                                                                                <ChangeRoomIcon pathStyle={{ stroke: "#17397F" }} />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        })}

                                                        <tr>
                                                            <td className={`pb-4 ${fields.length == 0 ? "pt-4" : "pt-1"} border-0`}>
                                                                <div className="d-flex align-items-center">
                                                                    <button
                                                                        className="position-relative btn btn-primary  mr-2"
                                                                        style={{
                                                                            border: "1px solid #39D9A7",
                                                                            borderRadius: "8px",
                                                                            color: "#39D9A7",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            padding: "10px",
                                                                            paddingLeft: "18px",
                                                                            paddingRight: "18px",
                                                                            background: "transparent",
                                                                        }}
                                                                        onClick={() => append({
                                                                            name: "",
                                                                            inUse: 0,
                                                                            parLevel: 0,
                                                                            orderQty: 0,
                                                                            suggested: 0
                                                                        })}
                                                                    >
                                                                        Add item
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex justify-content-end mt-2" style={{ padding: "0px 1.25rem" }}>
                                                <div className="row" style={{ gap: "10px" }}>
                                                    <button
                                                        className="position-relative px-5 btn btn-primary  mr-2"
                                                        style={{
                                                            border: "1px solid #39D9A7",
                                                            borderRadius: "8px",
                                                            color: "#39D9A7",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            padding: "10px",
                                                            paddingLeft: "18px",
                                                            paddingRight: "18px",
                                                            background: "transparent",
                                                            minWidth: "100px"
                                                        }}
                                                    >
                                                        Save
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
                                                            background: "#39D9A7",
                                                            minWidth: "100px"
                                                        }}
                                                    >
                                                        Save & Next
                                                    </button>
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
        </div>
    </div>
}

export default RequestLineans;
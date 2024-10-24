import React, { useEffect, useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ChangeRoomIcon, InfoIcon } from "../../../util/Svg";
import Select from 'react-select';

import { useFieldArray, useForm } from "react-hook-form";
import useRequest from "../../../hooks/useRequest";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import notificationObj from "../../../util/toastifyNotifications";

const RequestLineans = () => {
    
    const history = useHistory();
    const { categoryId } = useParams();
    let { floorDetails } = useSelector((state) => state.auth);

    const { control, getValues, register, setValue } = useForm({
        defaultValues: {
            orders: [
                {
                    id: 0,
                    productId: "",
                    inUse: 0,
                    parLevel: 0,
                    orderQuantity: 0,
                    suggested: 0
                }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "orders"
    })

    const { request: productListReq, response: productListResp } = useRequest();

    const { request: getProductDataReq, response: getProductDataResp } = useRequest();

    const { request: orderPlaceReq, response: getOrderPlaceResp } = useRequest();

    useEffect(() => {
        productListReq("get", `api/product?categoryId=${categoryId}`)
    }, [categoryId])

    const [orderPlacedStatus, setOrderPlacedStatus] = useState(null)

    const [productList, setProductList] = useState([])

    const [selectedProd, setSelectedProd] = useState(null)

    const [selectedProductId, setSelectedProduct] = useState([])

    useEffect(() => {
        if(productListResp) {
            setProductList(productListResp.data)
        }
    }, [productListResp])

    const setSelctedProductId = (idx, val) => {
        selectedProductId[idx] = val;
        setSelectedProduct(selectedProductId)
    }

    const changeData = (idx, data) => {
        setSelectedProd(idx)
        getProductDataReq("GET", `api/inventory/finance/request/orders-details?floorId=1&categoryId=${categoryId}&productId=${data}`)
    }

    useEffect(() => {
        if(getProductDataResp) {
            setValue(`orders.${selectedProd}.inUse`, getProductDataResp.data.countInUse);
            setValue(`orders.${selectedProd}.parLevel`, getProductDataResp.data.parLevel);
            setValue(`orders.${selectedProd}.suggested`, getProductDataResp.data.expectedQuantity);
        }
    }, [getProductDataResp])

    const onsubmit = (status) => {
        setOrderPlacedStatus(status)
        const data = getValues();

        let payload = data.orders.filter((d) => Number(d.orderQuantity) > 0).map(d =>  {
            return {
                "facilityId": floorDetails.facilityId,
                "floorId": 1,
                "categoryId": categoryId,
                "productId": d.productId,
                "orderQuantity": d.orderQuantity,
                "status": status
            }
        })

        orderPlaceReq("POST", "api/inventory/finance/place-order", payload)
    }

    useEffect(() => {
        if(getOrderPlaceResp) {
            if(orderPlacedStatus == "1") {
                notificationObj.success("Order Placed", "Your order placed request successfully generate.")
            } else {
                notificationObj.success("Order Saved Successfully", "Your order request saved in draft.")
            }
            
            history.push("/inventory-requests")
        }
    }, [getOrderPlaceResp])

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
                                                                                onChange={(e) => {
                                                                                    setSelctedProductId(data.id, e.value)
                                                                                    changeData(index, e.value)
                                                                                    setValue(`orders.${index}.productId`, e.value)
                                                                                }}
                                                                                options={
                                                                                    productList.filter((d) => !selectedProductId.includes(d.productId)).map(d => 
                                                                                    {
                                                                                        return { label: d.productName, value: d.productId }
                                                                                    }
                                                                                    )
                                                                                }
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
                                                                            <input 
                                                                                style={{background: "none", border: "none", outline: "none"}}
                                                                                readOnly
                                                                                {...register(`orders.${index}.inUse`, {
                                                                                    required: {
                                                                                        value: true,
                                                                                        message: "This field is required.",
                                                                                    },
                                                                                    min: {
                                                                                        value: 1,
                                                                                        message: "Invalid Qty"
                                                                                    }
                                                                                })}
                                                                             />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            <input 
                                                                                style={{background: "none", border: "none", outline: "none"}}
                                                                                readOnly
                                                                                {...register(`orders.${index}.parLevel`, {
                                                                                    required: {
                                                                                        value: true,
                                                                                        message: "This field is required.",
                                                                                    },
                                                                                    min: {
                                                                                        value: 1,
                                                                                        message: "Invalid Qty"
                                                                                    }
                                                                                })}
                                                                             />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg">
                                                                            <input 
                                                                                style={{background: "none", border: "none", outline: "none"}}
                                                                                {...register(`orders.${index}.orderQuantity`, {
                                                                                    required: {
                                                                                        value: true,
                                                                                        message: "This field is required.",
                                                                                    },
                                                                                    min: {
                                                                                        value: 1,
                                                                                        message: "Invalid Qty"
                                                                                    }
                                                                                })}
                                                                             />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className={`py-2 ${index == 0 ? "pt-4" : ""} border-0`}>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="text-dark-75 mb-1  font-size-lg d-flex align-items-center" style={{ gap: "9px" }}>
                                                                            <div className="py-2 px-2" style={{ borderRadius: "12px", border: "1px solid #39D9A7", color: "#39D9A7" }}>
                                                                                <input 
                                                                                    style={{background: "none", border: "none", outline: "none", width: "50px"}}
                                                                                    readOnly
                                                                                    {...register(`orders.${index}.suggested`, {
                                                                                        required: {
                                                                                            value: true,
                                                                                            message: "This field is required.",
                                                                                        },
                                                                                        min: {
                                                                                            value: 1,
                                                                                            message: "Invalid Qty"
                                                                                        }
                                                                                    })}
                                                                                />
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
                                                                            id: fields[fields.length - 1].id + 1,
                                                                            productId: "",
                                                                            inUse: 0,
                                                                            parLevel: 0,
                                                                            orderQuantity: 0,
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
                                                        onClick={() => onsubmit(0)}
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
                                                        onClick={() => onsubmit(1)}
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
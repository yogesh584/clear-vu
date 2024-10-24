import React from 'react'
import Modal from "react-bootstrap/Modal";

import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { MinusIcon, PlusIcon, TrashIcon } from '../../../util/Svg';


const TransferLinensModel = ({ show, onHide }) => {
    const {
        handleSubmit,
        // formState: { errors },
        control
    } = useForm();


    const onSubmit = () => {

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
            animation={true}
        >
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem" }} className='d-flex flex-column align-items-start'>
                <h4 style={{ fontWeight: "400" }}>
                    Transfer linens
                </h4>
                <p style={{fontWeight: "400", fontSize: "13px"}}>Select products and locations from and to where you wish to transfer</p>
            </Modal.Header>
            <Modal.Body style={{ padding: "1.25rem" }} closeButton>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column' style={{ gap: "20px" }}>
                    <div className="d-flex flex-column">
                        <label htmlFor='products' style={{ fontSize: "13px" }}>Product/s</label>
                        <Controller
                            name={"products"}
                            id="products"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="Select Product/s"
                                    inputId="products"
                                    options={[
                                        // { label: "Option 1", value: "1" },
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
                                            paddingLeft: "1rem"
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
                            )}
                        />
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <span className='font-weight-normal'>Top fitted sheet</span>
                        </div>
                        <div className='d-flex align-items-center' style={{gap: "14px"}}>
                            <button
                                className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FAFAFA",
                                    height:"40px",
                                    width: "40px"
                                }}
                            >
                                <MinusIcon />
                            </button>
                            <span>1</span>
                            <button
                                className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FAFAFA",
                                    height:"40px",
                                    width: "40px"
                                }}
                            >
                                <PlusIcon pathStyle={{fill: "green"}}/>
                            </button>

                            <button className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FB64641A",
                                    height:"40px",
                                    width: "40px"
                                }}><TrashIcon /></button>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <span className='font-weight-normal'>Pillow case</span>
                        </div>
                        <div className='d-flex align-items-center' style={{gap: "14px"}}>
                            <button
                                className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FAFAFA",
                                    height:"40px",
                                    width: "40px"
                                }}
                            >
                                <MinusIcon />
                            </button>
                            <span>2</span>
                            <button
                                className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FAFAFA",
                                    height:"40px",
                                    width: "40px"
                                }}
                            >
                                <PlusIcon pathStyle={{fill: "green"}}/>
                            </button>

                            <button className='border-0 d-flex justify-content-center align-items-center rounded-lg'
                                style={{
                                    color: "#FB6464",
                                    background: "#FB64641A",
                                    height:"40px",
                                    width: "40px"
                                }}><TrashIcon /></button>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='fromLocation' style={{ fontSize: "13px" }}>From Location</label>
                        <Controller
                            name={"fromLocation"}
                            id="fromLocation"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="select From Location"
                                    inputId="fromLocation"
                                    options={[
                                        // { label: "Option 1", value: "1" },
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
                                            paddingLeft: "1rem"
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
                            )}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='toLocation' style={{ fontSize: "13px" }}>To Location</label>
                        <Controller
                            name={"toLocation"}
                            id="toLocation"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="select To Location"
                                    inputId="toLocation"
                                    options={[
                                        // { label: "Option 1", value: "1" },
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
                                            paddingLeft: "1rem"
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
                            )}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none", paddingBottom: "1.75rem", padding: "1.25rem" }}>
                <button
                    className="position-relative btn btn-primary  mr-2"
                    style={{
                        border: "1px solid #FB6464",
                        borderRadius: "8px",
                        color: "#FB6464",
                        display: "flex",
                        alignItems: "center",
                        padding: "10px",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        background: "transparent"
                    }}
                    onClick={onHide}
                >
                    Cancel
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    Transfer linens
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default TransferLinensModel;

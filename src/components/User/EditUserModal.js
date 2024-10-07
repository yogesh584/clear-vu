import React from 'react'
import Modal from "react-bootstrap/Modal";

import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';


const EditUserModal = ({ show, onHide }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
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
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem" }}>
                <h4 style={{ fontWeight: "400" }}>
                    Edit user
                </h4>
            </Modal.Header>
            <Modal.Body style={{ padding: "1.25rem" }} closeButton>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column' style={{ gap: "20px" }}>
                    <div className="d-flex flex-column">
                        <label htmlFor='fullName' style={{ fontSize: "13px" }}>Full name</label>
                        <input
                            className={`form-control form-control-solid h-auto py-3 px-6 ${errors.fullname && "is-invalid"
                                }`}
                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                            type="text"
                            name="fullname"
                            autoComplete="off"
                            placeholder="Enter full name"
                            {...register("fullname", {
                                required: true
                            })}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='email' style={{ fontSize: "13px" }}>Email</label>
                        <input
                            className={`form-control form-control-solid h-auto py-3 px-6 ${errors.email && "is-invalid"
                                }`}
                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                            type="text"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter email address"
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='userRole' style={{ fontSize: "13px" }}>User Role</label>
                        <Controller
                            name={"userRole"}
                            id="userRole"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="Select role"
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
                        <label htmlFor='location' style={{ fontSize: "13px" }}>Location</label>
                        <Controller
                            name={"location"}
                            id="location"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    placeholder="Location"
                                    inputId="location"
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
                    Save changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditUserModal;
import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";

import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import { ClosedEyeIcon, OpenEyeIcon } from '../../util/Svg';
import { useSelector } from 'react-redux';
import useRequest from '../../hooks/useRequest';
import notification from "../../util/toastifyNotifications"


const AddNewUserModal = ({ show, onHide, roles,locationList, listRefresh}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
        reset
    } = useForm();

    let { floorDetails, userId } = useSelector((state) => state.auth);
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfPasswordVisible, setIsConfPasswordVisible] = useState(false);

    const {request: addUserReq, response: addUserResp} = useRequest()

    const onSubmit = (data) => {
        data.userRole = [data.userRole.value]
        data.facilityId = floorDetails.facilityId;
        data.userId = userId;
        data.floorId = data.location.map(d => d.value)

        delete data.location;
        addUserReq("POST", "api/admin/adduser", data)
    };

    useEffect(() => {
        if(addUserResp){
            notification.success("User Created", "User has been created successfully.")
            onHide();
            reset()
            listRefresh();
        }
    }, [addUserResp])

    return (
        <Modal
            show={show}
            onHide={() => {onHide(); reset();}}
            size="md"
            centered
            animation={true}
        >
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem" }}>
                <h4 style={{ fontWeight: "400" }}>
                    Add new user
                </h4>
            </Modal.Header>
            <Modal.Body style={{ padding: "1.25rem" }} closeButton>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column' style={{ gap: "20px" }}>
                    <div className="d-flex flex-column">
                        <label htmlFor='fullName' style={{ fontSize: "13px" }}>Full name</label>
                        <input
                            className={`form-control form-control-solid h-auto py-3 px-6 ${errors.fullName && "is-invalid"
                                }`}
                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                            type="text"
                            name="fullName"
                            autoComplete="off"
                            placeholder="Enter full name"
                            {...register("fullName", {
                                required: true
                            })}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='emailId' style={{ fontSize: "13px" }}>Email</label>
                        <input
                            className={`form-control form-control-solid h-auto py-3 px-6 ${errors.email && "is-invalid"
                                }`}
                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                            type="text"
                            name="emailId"
                            autoComplete="off"
                            placeholder="Enter email address"
                            {...register("emailId", {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                        />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='userRole' style={{ fontSize: "13px" }}>User Role</label>
                        <Controller
                            autoComplete="off"
                            name={"userRole"}
                            id="userRole"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    autoComplete="off"
                                    {...field}
                                    placeholder="Select role"
                                    inputId="userRole"
                                    options={
                                        roles.map(d => {
                                            return {
                                                label: d.roleName, value: d.roleId
                                            }
                                        })}
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
                                    isMulti
                                    placeholder="Location"
                                    inputId="location"
                                    options={locationList.map(location => {
                                        return {label: location.floorName, value: location.floorId}
                                    })}
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
                        <label htmlFor='password' style={{ fontSize: "13px" }}>Password</label>
                        <div className="position-relative">
                            <input
                                className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.password && "is-invalid" /*: "is-valid"*/
                                    }`}
                                style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                autoComplete="new-password"
                                placeholder="Password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {isPasswordVisible ? (
                            <span
                                className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                                onClick={() =>
                                setIsPasswordVisible(false)
                                }
                            >
                                <ClosedEyeIcon />
                            </span>
                            ) : (
                            <span
                                className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                                onClick={() => setIsPasswordVisible(true)}
                            >
                                <OpenEyeIcon />
                            </span>
                            )}
                        </div>
                        {errors.password && (
                            <div className="invalid-feedback">
                                {errors.password.message}
                            </div>
                        )}
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor='confirmPassword' style={{ fontSize: "13px" }}>Confirm Password</label>
                        <div className="position-relative">
                            <input
                                autoFill={false}
                                className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.confirmPassword && "is-invalid" /*: "is-valid"*/
                                    }`}
                                style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                                type={isConfPasswordVisible ? "text" : "password"}
                                name="confirmPassword"
                                autoComplete="off"
                                placeholder="Confirm Password"
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm password is required"
                                    },
                                    validate: (value) => value === watch('password') || "Password do not match"
                                })}
                            />
                            {isConfPasswordVisible ? (
                            <span
                                className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                                onClick={() =>
                                setIsConfPasswordVisible(false)
                                }
                            >
                                <ClosedEyeIcon />
                            </span>
                            ) : (
                            <span
                                className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                                onClick={() => setIsConfPasswordVisible(true)}
                            >
                                <OpenEyeIcon />
                            </span>
                            )}
                        </div>
                        {errors.confirmPassword && (
                            <div className="text-danger">
                                {errors.confirmPassword.message}
                            </div>
                        )}
                    </div>

                    <div style={{ borderTop: "none", paddingBottom: "1.75rem", padding: "1.25rem", display: "flex"}}>
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
                            Save changes
                        </button>
                    </div>
                </form>
            </Modal.Body>
            {/* <Modal.Footer style={{ borderTop: "none", paddingBottom: "1.75rem", padding: "1.25rem" }}>
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
                            Save changes
                        </button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default AddNewUserModal;
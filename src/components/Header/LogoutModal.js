import React, { useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import useRequest from "../../hooks/useRequest"
import notification from "../../util/toastifyNotifications"
import { logout } from "../../store/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { LogoutIcon } from '../../util/Svg';

const LogoutModal = ({ show, onHide }) => {
    const dispatch = useDispatch();
    const { userId } = useSelector((state) => state.auth);
    const { request: logoutRequest, response: logoutResponse } = useRequest()

    const logoutHandler = () => {
        logoutRequest("post", "api/user/logout", { userId: userId })
    }

    useEffect(() => {
        if (logoutResponse) {
            notification.success("Logout Successfully", "Your Account is logged out successfully.")
            dispatch(logout())
        }
    }, [logoutResponse])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            centered
            animation={true}
        >
            <Modal.Body style={{ padding: "1.25rem" }} closeButton>
                <div className='d-flex justify-content-center'>
                    <img src='/logout.png' />
                </div>
                <div>
                    <h2 className='text-center'>Log Out ?</h2>
                    <p className='text-center' style={{fontWeight: "normal"}}>You’ll need to sign in again to access your account</p>
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <button
                        className="position-relative btn btn-primary  mr-2 d-flex justify-items-center"
                        style={{
                            border: "1px solid #FB6464",
                            borderRadius: "8px",
                            color: "#FB6464",
                            display: "flex",
                            alignItems: "center",
                            padding: "15px",
                            paddingLeft: "35px",
                            paddingRight: "35px",
                            width: "50%",
                            background: "transparent",
                            cursor: "pointer"

                        }}
                        onClick={onHide}
                    >
                        <span>Cancel</span>
                    </button>
                    <button
                        className="position-relative btn btn-primary d-flex justify-items-center"
                        style={{
                            gap:"10px",
                            border: "1px solid #39D9A7",
                            borderRadius: "8px",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            padding: "10px",
                            paddingLeft: "28px",
                            width: "50%",
                            background: "#39D9A7",
                            cursor: "pointer"
                        }}
                        onClick={logoutHandler}
                    >
                        <LogoutIcon />
                        Logout
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default LogoutModal;
import React from 'react'
import Modal from "react-bootstrap/Modal";
// import { CheckIcon } from '../../util/Svg';

const userRolePermissionValidation = (userRolePermissionsList,roleId) => Object.keys(userRolePermissionsList).length > 0 && roleId;

const ViewPermissionModal = ({ show, onHide, data, userRolePermissionsList }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            animation={true}
        >
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem" }}>
                <h4 style={{ fontWeight: "400" }}>
                    Permissions for {data.roleName}
                </h4>
            </Modal.Header>
            <Modal.Body style={{ padding: "1.25rem" }} closeButton>
                <div className='d-flex flex-column' style={{gap: "1.50rem"}}>
                    {userRolePermissionValidation(userRolePermissionsList, data.roleId) && userRolePermissionsList[data.roleId].menus.map((permisson, index) => {
                        return <div key={permisson.menuName + index} className='d-flex justify-content-between align-items-center'>
                            <div>
                                <span style={{ fontWeight: 600 }} className='text-capitalize'>
                                    {permisson.menuName == "*" ? "All" : permisson.menuName}
                                </span>
                                {
                                    (permisson.subMenuMapping && permisson.subMenuMapping.length > 0) && 

                                    <ul>
                                        {
                                            permisson.subMenuMapping.map((d, i) => (<li key={i}>{d.menuName}</li>))   
                                        }
                                    </ul>
                                }
                            </div>
                            <div className='d-flex'>
                                {/* <button className="position-relative btn btn-primary  mr-2 d-flex "
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
                                        gap: "5px"
                                    }}>
                                    <CheckIcon />
                                    Create
                                </button> */}
                            </div>
                        </div>
                    })}

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ViewPermissionModal
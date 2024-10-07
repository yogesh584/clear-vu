import React from 'react'
import Modal from "react-bootstrap/Modal";

const DeleteModal = ({ headingText, bodyText, show, onHide, onClickFunc }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
            animation={true}
        >
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem", paddingBottom: "0px" }}>
                <h4 style={{ fontWeight: "400" }}>
                    {headingText}
                </h4>
            </Modal.Header>
            <Modal.Body style={{paddingTop: "0.5rem",padding: "1.25rem"}} closeButton>
                <div>
                    <div>
                        {bodyText ?? "Are you sure you want to delete ?"}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none", paddingBottom: "1.75rem", padding: "1.25rem" }}>
                <button 
                    className="position-relative btn btn-primary  mr-2 d-flex"
                    style={{
                    border: "1px solid #e8e9eb",
                    borderRadius: "8px",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                    // background: "#e8e9eb"
                }}
                    onClick={() => onClickFunc(false)}
                >
                    Cancel
                </button>
                <button 
                className="position-relative btn btn-primary  mr-2 d-flex "
                style={{
                    border: "1px solid #FB6464",
                    borderRadius: "8px",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    paddingLeft: "18px",
                    paddingRight: "18px",
                    background: "#FB6464"
                }}
                    onClick={() => onClickFunc(true)}
                >
                    Delete
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;
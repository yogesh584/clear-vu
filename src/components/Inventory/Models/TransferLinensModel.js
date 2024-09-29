import React from 'react'
import Modal from "react-bootstrap/Modal";
import "../../../styles/modal.css"

const TransferLinensModel = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
            animation={true}
        >
            <Modal.Body closeButton>
                <div>
                    <h4>
                        Transfer linens
                    </h4>
                    <p style={{ fontSize: "12px", fontWeight: "normal" }}>Select products and locations from and to where you wish to transfer</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default TransferLinensModel
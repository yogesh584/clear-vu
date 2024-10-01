import React from 'react'
import Modal from "react-bootstrap/Modal";

const ViewPermissionModal = ({ show, onHide }) => {
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
                        Permissions for Warehouse
                    </h4>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ViewPermissionModal
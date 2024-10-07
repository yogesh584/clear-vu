import React from 'react'
import Modal from "react-bootstrap/Modal";

import { useForm } from "react-hook-form";
import { HorizontalArrow } from '../../../util/Svg';

const tableData = [
    {
        room: "Room 1A (Restock)",
        bedsheets: 0,
        pillowcases: 0,
        blankets: 0,
        mattressProtector: 0,
        towels: 0,
        bathMats: 0,
        napkins: 0
    },
    {
        room: "Room 1A (Dirty returns)",
        bedsheets: 0,
        pillowcases: 0,
        blankets: 0,
        mattressProtector: 0,
        towels: 0,
        bathMats: 0,
        napkins: 0
    },
    {
        room: "Excess/lost Qty",
        bedsheets: 0,
        pillowcases: 0,
        blankets: 0,
        mattressProtector: 0,
        towels: 0,
        bathMats: 0,
        napkins: 0
    },
    {
        room: "In Use",
        bedsheets: 0,
        pillowcases: 0,
        blankets: 0,
        mattressProtector: 0,
        towels: 0,
        bathMats: 0,
        napkins: 0
    },
]

const ChangeRoomModal = ({ show, onHide }) => {
    const {

        handleSubmit
    } = useForm();


    const onSubmit = () => {

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
            animation={true}
        >
            <Modal.Header style={{ borderBottom: "none", paddingTop: "1.75rem", padding: "1.25rem", paddingBottom: "0px" }} className='d-flex flex-column align-items-start'>
                <h4 style={{ fontWeight: "400" }}>
                    Change Room 1A
                </h4>
                <p style={{ fontWeight: "400", fontSize: "13px" }}>Verify linen details to proceed</p>
            </Modal.Header>
            <Modal.Body style={{ padding: "1.25rem", paddingTop: "0px" }} closeButton>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column' style={{ gap: "20px" }}>
                    <div className="dataTables_wrapper block-table">
                        <div className="table-responsive">
                            <table
                                className="table dataTable table-head-custom table-head-bg table-borderless table-vertical-center"
                                id="taskTable"
                            >
                                <thead>
                                    <tr style={{ whiteSpace: "nowrap" }}>
                                        <th className="py-4">Room</th>
                                        <th className="py-4">Bedsheets</th>
                                        <th className="py-4">Pillow cases</th>
                                        <th className="py-4">Blankets</th>
                                        <th className="py-4">Mattress protector</th>
                                        <th className="py-4">Towels</th>
                                        <th className="py-4">Bath mats</th>
                                        <th className="py-4">Napkins</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((tData, index) => {
                                        return <tr key={index + tData.room}>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center w-full">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        {tData.room}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.bedsheets} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px" }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.pillowcases} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px" }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={3} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px" }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.blankets} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px", color: "#e6e8ea" }}
                                                            disabled={true}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.blankets} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px", color: "#e6e8ea" }}
                                                            disabled={true}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.mattressProtector} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px", color: "#e6e8ea" }}
                                                            disabled={true}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-2  border-0`}>
                                                <div className="d-flex align-items-center">
                                                    <div className="text-dark-75 mb-1  font-size-lg">
                                                        <input value={tData.napkins} type='number'
                                                            className={`form-control form-control-solid h-auto py-3 pr-0 pl-4`}
                                                            style={{ borderRadius: "8px", border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", maxWidth: "50px", paddingRight: "0px", color: "#e6e8ea" }}
                                                            disabled={true}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-2' style={{ flexWrap: "wrap", gap: "15px" }}>
                            <button className="position-relative btn btn-primary  mr-2"
                                style={{
                                    border: "1px solid #C6C9CE",
                                    borderRadius: "8px",
                                    color: "#C6C9CE",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    paddingLeft: "18px",
                                    paddingRight: "18px",
                                    background: "transparent"
                                }}>
                                <HorizontalArrow dir={"left"} svgStyle={{ fill: "#C6C9CE" }} />
                                <span className="ml-4">Previous</span>
                            </button>
                            <div>
                                Room <span>1</span>/8
                            </div>
                            <button className="position-relative btn btn-primary  mr-2"
                                style={{
                                    border: "1px solid #39D9A7",
                                    borderRadius: "8px",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px",
                                    paddingLeft: "18px",
                                    paddingRight: "18px",
                                    background: "#39D9A7"
                                }}>
                                <span className="mr-4">Confirm & change </span>
                                <HorizontalArrow dir={"right"} svgStyle={{ fill: "#fff" }} />
                            </button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ChangeRoomModal;
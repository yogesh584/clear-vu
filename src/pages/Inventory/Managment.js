import React, { useEffect, useState } from "react";
import LinensComp from "../../components/Inventory/LinensComp";
import GarmentsComp from "../../components/Inventory/GarmentsComp";
import CurtainsComp from "../../components/Inventory/CurtainsComp";


const Managment = () => {
    const [activeTab, setActiveTab] = useState("linens");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [linenCall, setLinenCall] = useState({ card: false, table: false, filters: { productName: false, location: false } })

    const [garmentCall, setGarmentCall] = useState({ card: false, table: false, filters: { productName: false, location: false } })

    const [curtainCall, setCurtainCall] = useState({ card: false, table: false, filters: { productName: false, location: false } })

    useEffect(() => {
        document.title = "Inventory Managment - Clear vu";
    }, []);

    return (
        <div
            className="content  d-flex flex-column flex-column-fluid"
            id="kt_content"

            style={{ background: "#fafafa" }}
        >
            <div
                className="subheader py-4 py-lg-4 subheader-solid "
                id="kt_subheader"
                style={{ position: "relative", top: "0px", left: "0px" }}
            >
                <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3">
                        <div className="d-flex align-items-baseline flex-wrap mr-5">
                            <h4 className="text-dark font-weight-bold my-1 mr-5">
                                Inventory management
                            </h4>
                        </div>
                        <div
                            className="p-1 d-flex"
                            style={{ border: "1px solid #c6c9ce", borderRadius: "8px" }}
                        >
                            <button
                                style={{
                                    background: activeTab === "linens" ? "#39D9A7" : "transparent",
                                    color: activeTab === "linens" ? "#fff" : "#000",
                                    borderRadius: "8px", cursor: "pointer"
                                }}
                                className="px-4 py-2 mr-2 border-0"
                                onClick={() => handleTabClick("linens")}
                            >
                                Linens
                            </button>
                            <button
                                style={{
                                    background: activeTab === "garments" ? "#39D9A7" : "transparent",
                                    color: activeTab === "garments" ? "#fff" : "#000",
                                    borderRadius: "8px", cursor: "pointer"
                                }}
                                className="px-4 py-2 mr-2 border-0"

                                onClick={() => handleTabClick("garments")}
                            >
                                Garments
                            </button>
                            <button
                                style={{
                                    background: activeTab === "curtains" ? "#39D9A7" : "transparent",
                                    color: activeTab === "curtains" ? "#fff" : "#000",
                                    borderRadius: "8px", cursor: "pointer"
                                }}
                                className="px-4 py-2 mr-2 border-0"
                                onClick={() => handleTabClick("curtains")}
                            >
                                Curtains
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                <LinensComp activeTab={activeTab} isDataAlreadyFetched={linenCall} changeLinenStatus={setLinenCall} />
                <GarmentsComp activeTab={activeTab} isDataAlreadyFetched={garmentCall} changeLinenStatus={setGarmentCall} />
                <CurtainsComp activeTab={activeTab} isDataAlreadyFetched={curtainCall} changeLinenStatus={setCurtainCall} />
            </div>
        </div>
    );
};

export default Managment;

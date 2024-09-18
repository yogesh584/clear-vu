import React, { useEffect, useState } from "react";
import LinensComp from "../../components/Inventory/LinensComp";
import GarmentsComp from "../../components/Inventory/GarmentsComp";
import CurtainsComp from "../../components/Inventory/CurtainsComp";


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("linens");
    const [linensTableData, setLinensTableData] = useState([]);
    const [linensCardData, setLinensCardData] = useState([]);
    const [garmentsCardData, setGarmenntsCardData] = useState([]);
    const [curtainsCardData, setCurtainsCardData] = useState([]);
    const [garmentsTableData, setGarmentsTableData] = useState([]);
    const [curtainsTableData, setCurtainsTableData] = useState([])


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

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

            <div className="tab-content mt-3">
                {activeTab === "linens" && (
                    <LinensComp activeTab={activeTab} setTableData={setLinensTableData} tableData={linensTableData} cardData={linensCardData} setCardData={setLinensCardData} />
                )}
                {activeTab === "garments" && (
                    <GarmentsComp activeTab={activeTab} setTableData={setGarmentsTableData} tableData={garmentsTableData} cardData={garmentsCardData} setCardData={setGarmenntsCardData} />
                )}
                {activeTab === "curtains" && (
                    <CurtainsComp activeTab={activeTab} setTableData={setCurtainsTableData} tableData={curtainsTableData} cardData={curtainsCardData} setCardData={setCurtainsCardData} />
                )}
            </div>
        </div>
    );
};

export default Dashboard;

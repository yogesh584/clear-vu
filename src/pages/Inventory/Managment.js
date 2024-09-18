import React, { useEffect, useState } from "react";
import LinensComp from "../../components/Inventory/LinensComp";
import GarmentsComp from "../../components/Inventory/GarmentsComp";
import CurtainsComp from "../../components/Inventory/CurtainsComp";
import useRequest from "../../hooks/useRequest"


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("linens");
    const [isDataAlreadyFetched, setIsDataAlreadyFetched] = useState({
        linens: true,
        garments: false,
        curtains: false
    });

    const [linensData, setLinensData] = useState([])
    const [garmentsData, setGarmentsData] = useState([])
    const [curtainsData, setCurtainsData] = useState([])

    const { request: requestLinensData, response: responseLinensData } = useRequest()
    const { request: requestGarmentsData, response: responseGarmentsData } = useRequest()
    const { request: requestCurtainsData, response: responseCurtainsData } = useRequest()

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (!isDataAlreadyFetched[tabName]) {
            if (tabName == "linens") {
                requestLinensData("get", `api/inventory/management?userId=1&categoryId=1`);
            }
            if (tabName == "garments") {
                requestGarmentsData("get", `api/inventory/management?userId=1&categoryId=2`);
            }
            if (tabName == "curtains") {
                requestCurtainsData("get", `api/inventory/management?userId=1&categoryId=3`);
            }
        }
    };

    useEffect(() => {
        document.title = "Inventory Managment - Clear vu";
        requestLinensData("get", `api/inventory/management?userId=1&categoryId=1`);
    }, []);

    useEffect(() => {
        if (responseLinensData) {
            setIsDataAlreadyFetched({ ...isDataAlreadyFetched, linens: true })
            const { content } = responseLinensData;
            setLinensData(content)
        }
    }, [responseLinensData])

    useEffect(() => {
        if (responseGarmentsData) {
            setIsDataAlreadyFetched({ ...isDataAlreadyFetched, garments: true })
            const { content } = responseGarmentsData;
            setGarmentsData(content)
        }
    }, [responseGarmentsData])

    useEffect(() => {
        if (responseCurtainsData) {
            setIsDataAlreadyFetched({ ...isDataAlreadyFetched, curtains: true })
            const { content } = responseCurtainsData;
            setCurtainsData(content)
        }
    }, [responseCurtainsData])

    return (
        <>
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
                        <LinensComp data={linensData} />
                    )}
                    {activeTab === "garments" && (
                        <GarmentsComp data={garmentsData} />
                    )}
                    {activeTab === "curtains" && (
                        <CurtainsComp data={curtainsData} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;

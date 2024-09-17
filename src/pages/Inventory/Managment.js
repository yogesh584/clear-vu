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

    const [linensData, setLinensData] = useState([
        {
            "sku": "012",
            "productName": "Bath Towel",
            "location": "first floor(East)",
            "countInUse": 50,
            "cleanStock": 50,
            "parLevel": "56",
            "dirtyReturn": 56,
            "deliveredQuantity": 30,
            "fillRate": 53.57142857142857
        },
        {
            "sku": "071",
            "productName": "Bedsheet",
            "location": "first floor(West)",
            "countInUse": 50,
            "cleanStock": 50,
            "parLevel": "56",
            "dirtyReturn": 56,
            "deliveredQuantity": 56,
            "fillRate": 100
        },
        {
            "sku": "157",
            "productName": "Pillow cover",
            "location": "first floor(West)",
            "countInUse": 50,
            "cleanStock": 50,
            "parLevel": "56",
            "dirtyReturn": 56,
            "deliveredQuantity": 56,
            "fillRate": 100
        },
        {
            "sku": "018",
            "productName": "Blanket",
            "location": "first floor(West)",
            "countInUse": 50,
            "cleanStock": 50,
            "parLevel": "56",
            "dirtyReturn": 56,
            "deliveredQuantity": 56,
            "fillRate": 100
        },
        {
            "sku": "018",
            "productName": "Blanket",
            "location": "Second floor(West)",
            "countInUse": 50,
            "cleanStock": 50,
            "parLevel": "56",
            "dirtyReturn": 56,
            "deliveredQuantity": 30,
            "fillRate": 53.57142857142857
        }
    ])
    const [garmentsData, setGarmentsData] = useState([
        {
          SKU: "088",
          location: "Floor 1 (West)",
          productName: "Lab coats",
          inUse: "S",
          lastWashed: "02-24-2024",
          totalWashed: 56,
          nextWashCycle: "5 Days",
          status: "In use"
        },
        {
          SKU: "089",
          location: "Floor 1 (West)",
          productName: "Scrubs",
          inUse: "Samuel Nikon",
          lastWashed: "02-24-2024",
          totalWashed: 56,
          nextWashCycle: "5 Days",
          status: "In laundry"
        },
        {
          SKU: "090",
          location: "Floor 1 (West)",
          productName: "Head wear",
          inUse: "-",
          lastWashed: "02-24-2024",
          totalWashed: 56,
          nextWashCycle: "5 Days",
          status: "Clean stock"
        },
        {
          SKU: "091",
          location: "Floor 1 (West)",
          productName: "Patient gown",
          inUse: "XXL",
          lastWashed: "02-24-2024",
          totalWashed: 56,
          nextWashCycle: "5 Days",
          status: "In laundry"
        },
        {
          SKU: "092",
          location: "Floor 3 (West)",
          productName: "Head wear",
          inUse: "-",
          lastWashed: "02-24-2024",
          totalWashed: 56,
          nextWashCycle: "5 Days",
          status: "In use"
        }
      ])
    const [curtainsData, setCurtainsData] = useState([
        {
            SKU: "021",
            location: "Floor 1 (West)",
            productName: "Privacy curtains",
            installationDate: "02-24-2024",
            lastWashed: "02-24-2024",
            totalWashed: 56,
            nextWashCycle: "5 Days",
            status: "In use"
        },
        {
            SKU: "022",
            location: "Floor 1 (West)",
            productName: "Room Dividers",
            installationDate: "02-24-2024",
            lastWashed: "02-24-2024",
            totalWashed: 56,
            nextWashCycle: "5 Days",
            status: "In laundry"
        },
        {
            SKU: "033",
            location: "Floor 1 (West)",
            productName: "Shower Curtains",
            installationDate: "02-24-2024",
            lastWashed: "02-24-2024",
            totalWashed: 56,
            nextWashCycle: "5 Days",
            status: "Clean stock"
        },
        {
            SKU: "021",
            location: "Floor 1 (West)",
            productName: "Privacy curtains",
            installationDate: "02-24-2024",
            lastWashed: "02-24-2024",
            totalWashed: 56,
            nextWashCycle: "5 Days",
            status: "In laundry"
        },
        {
            SKU: "021",
            location: "Floor 3 (West)",
            productName: "Privacy curtains",
            installationDate: "02-24-2024",
            lastWashed: "02-24-2024",
            totalWashed: 56,
            nextWashCycle: "5 Days",
            status: "In use"
        }
    ])

    const { request: requestLinensData, response: responseLinensData } = useRequest()
    const { request: requestGarmentsData, response: responseGarmentsData } = useRequest()
    const { request: requestCurtainsData, response: responseCurtainsData } = useRequest()

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        // if (!isDataAlreadyFetched[tabName]) {
        //     if (tabName == "linens") {
        //         requestLinensData("get", `inventory/management`);
        //     }
        //     if (tabName == "garments") {
        //         requestGarmentsData("get", `inventory/management`);
        //     }
        //     if (tabName == "curtains") {
        //         requestCurtainsData("get", `inventory/management`);
        //     }
        // }
    };

    useEffect(() => {
        document.title = "Inventory Managment - Clear vu";
        // requestLinensData("get", `inventory/management`);
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

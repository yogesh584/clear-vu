import React, { useEffect, useState } from "react";
import { PencilIcon, SwapIcon, VerticalArrow } from "../../../util/Svg";
import TransferLinensModel from "../../../components/Inventory/Models/TransferLinensModel";
import { Link } from "react-router-dom";
import cardStyles from "../../../styles/card.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../../styles/slider.css"



const Requests = () => {
    const [showTransferLinensModal, setShowTransferLinensModal] = useState(false);
    const handleShowTransferLinensModal = () => setShowTransferLinensModal(true)
    const handleCloseTransferLinensModal = () => setShowTransferLinensModal(false)

    const [activeTab, setActiveTab] = useState("linens");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        document.title = "Inventory Managment - Clear vu";
    }, []);

    return (
        <>
            <div
                className="content  d-flex flex-column flex-column-fluid"
                id="kt_content"
                style={{ background: "#fafafa" }}
            >

                <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3 mb-4 p-4">
                    <div className="d-flex align-items-baseline flex-wrap mr-5">
                        <h4 className="text-dark font-weight-bold my-1 mr-5">
                            Order management
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

                <div>
                    <div
                        className="subheader py-4 py-lg-4 subheader-solid"
                        id="kt_subheader"
                        style={{ position: "relative", top: "0px", left: "0px" }}
                    >
                        <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3">
                                <div className="d-flex align-items-center flex-wrap mr-5">
                                    <h4 className="text-dark font-weight-bold my-1 mr-4">
                                        Bed linens
                                    </h4>
                                    <VerticalArrow />
                                </div>
                                <div
                                    className="d-flex"
                                >
                                    <button
                                        style={{
                                            background: "transparent",
                                            color: "#000",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                        onClick={handleShowTransferLinensModal}
                                    >
                                        <SwapIcon />{" "}Transfer linens
                                    </button>
                                    

                                    <Link
                                        to={`/inventory-requests/request/${(activeTab == "linens") ? "1" : (activeTab == "garments") ? "2" : "3"}`}
                                        style={{
                                            background: "#39D9A7",
                                            color: "#fff",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                    >
                                        Order linens
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="linens" role="tabpanel" aria-labelledby="linens-tab" style={{ display: "block" }}>
                            {/*         CARDS        */}
                            <div id="cards_parent swiper" className="mt-4">
                                <Swiper
                                    modules={[SwiperPagination]}
                                    slidesPerView={3}
                                    loop={false}
                                    observer={true}
                                    pagination={{
                                        clickable: true
                                    }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        // when window width is >= 1024px
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        }
                                    }}
                                    id="cards" className="d-flex w-100 px-3 justify-content-between pb-10"
                                >

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>



                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div>
                    <div
                        className="subheader py-4 py-lg-4 subheader-solid "
                        id="kt_subheader"
                        style={{ position: "relative", top: "0px", left: "0px" }}
                    >
                        <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3">
                                <div className="d-flex align-items-center flex-wrap mr-5">
                                    <h4 className="text-dark font-weight-bold my-1 mr-4">
                                        Bath linens
                                    </h4>
                                    <VerticalArrow />
                                </div>
                                <div
                                    className="d-flex"
                                >
                                    <button
                                        style={{
                                            background: "transparent",
                                            color: "#000",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                        onClick={handleShowTransferLinensModal}
                                    >
                                        <SwapIcon />{" "}Transfer linens
                                    </button>

                                    <Link
                                        to="/inventory-requests/request-lineans"
                                        style={{
                                            background: "#39D9A7",
                                            color: "#fff",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                    >
                                        Order linens
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="linens" role="tabpanel" aria-labelledby="linens-tab" style={{ display: "block" }}>
                            <div id="cards_parent swiper" className="mt-4">
                                <Swiper
                                    modules={[SwiperPagination]}
                                    slidesPerView={3}
                                    loop={false}
                                    observer={true}
                                    pagination={{
                                        clickable: true
                                    }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        // when window width is >= 1024px
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        }
                                    }}
                                    id="cards" className="d-flex w-100 px-3 justify-content-between pb-10"
                                >

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>



                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div> */}

                {/* <div>
                    <div
                        className="subheader py-4 py-lg-4 subheader-solid "
                        id="kt_subheader"
                        style={{ position: "relative", top: "0px", left: "0px" }}
                    >
                        <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            <div className="d-flex align-items-center flex-wrap mr-1 justify-content-between w-100 mt-3">
                                <div className="d-flex align-items-center flex-wrap mr-5">
                                    <h4 className="text-dark font-weight-bold my-1 mr-4">
                                        Specialty linens
                                    </h4>
                                    <VerticalArrow />
                                </div>
                                <div
                                    className="d-flex"
                                >
                                    <button
                                        style={{
                                            background: "transparent",
                                            color: "#000",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                        onClick={handleShowTransferLinensModal}
                                    >
                                        <SwapIcon />{" "}Transfer linens
                                    </button>

                                    <Link
                                        to="/inventory-requests/request-lineans"
                                        style={{
                                            background: "#39D9A7",
                                            color: "#fff",
                                            borderRadius: "8px", cursor: "pointer"
                                        }}
                                        className="px-4 py-2 mr-2 border-0"
                                    >
                                        Order linens
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="linens" role="tabpanel" aria-labelledby="linens-tab" style={{ display: "block" }}>
                            <div id="cards_parent swiper" className="mt-4">
                                <Swiper
                                    modules={[SwiperPagination]}
                                    slidesPerView={3}
                                    loop={false}
                                    observer={true}
                                    pagination={{
                                        clickable: true
                                    }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        // when window width is >= 1024px
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        }
                                    }}
                                    id="cards" className="d-flex w-100 px-3 justify-content-between pb-10"
                                >

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide key={"index" + "lineans_card"} id="card" className={`${cardStyles.new_card} card`} style={{ border: "1px solid #fb6464", borderRadius: "10px" }}>
                                        <div id="row1" className="d-flex justify-content-between">
                                            <div>
                                                <span style={{ fontSize: "18px", textTransform: "capitalize" }}>Title</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="mr-2 rounded px-2" style={{ padding: "1px", color: "#fb6464", border: "1px solid #fb6464" }}>
                                                    <span>35.71%</span>
                                                </div>
                                                <PencilIcon />
                                            </div>
                                        </div>
                                        <div id="row2" className="d-flex justify-content-between mt-3">
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In use</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">18</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">In stock</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">95</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span style={{ fontSize: "16px", fontWeight: "normal" }} className="mb-1">Requested</span>
                                                <span style={{ fontSize: "24px" }} className="mb-1">13</span>
                                                <a href="/" style={{ color: "#39D9A7" }}>View</a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <TransferLinensModel show={showTransferLinensModal} onHide={handleCloseTransferLinensModal} />
        </>
    );
};

export default Requests;

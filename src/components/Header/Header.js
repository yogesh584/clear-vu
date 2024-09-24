import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout, sidebarToggle } from "../../store/auth/action";
import { Arrow, HamburgerMenu, HeaderSearchIcon, HeaderNotificationIcon } from "../../util/Svg";
import useRequest from "../../hooks/useRequest"
import notification from "../../util/toastifyNotifications"
import styles from "../../styles/header.module.css"


const Header = ({ setToggleSidebar }) => {
  const dispatch = useDispatch();
  const { name, isMobileSidebarOpen, userId } = useSelector((state) => state.auth);
  const { request: logoutRequest, response: logoutResponse } = useRequest()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobileSidebarOpen === false) {
      document.body.removeAttribute("data-offcanvas-aside");
      setIsSidebarOpen((prev) => !prev);
    }
  }, [isMobileSidebarOpen]);

  const openSidebarHandler = () => {
    document.body.setAttribute("data-offcanvas-aside", "on");

    dispatch(sidebarToggle({ isMobileSidebarOpen: !isMobileSidebarOpen }));
    setIsSidebarOpen((prev) => !prev);
  };

  const openTopbarHandler = () => {
    document.body.classList.toggle("topbar-mobile-on");
    document
      .querySelector("#kt_header_mobile_topbar_toggle")
      .classList.toggle("active");
  };

  const logoutHandler = () => {
    logoutRequest("post", "api/user/logout", { userId: userId })
  }

  useEffect(() => {
    if (logoutResponse) {
      notification.success("Logout Successfully", "Your Account is logged out successfully.")
      dispatch(logout())
    }
  }, [logoutResponse])

  return (
    <>
      <div
        id="kt_header_mobile"
        className="header-mobile align-items-center  header-mobile-fixed "
      >
        <Link to="/">
          <img
            alt="Logo"
            src="./logo.png"
            style={{ width: "108px" }}
          />
        </Link>

        <div className="d-flex align-items-center">
          <button
            onClick={openSidebarHandler}
            className={`btn p-0 burger-icon burger-icon-left ${isSidebarOpen ? "mobile-toggle-active" : ""
              }`}
            id="kt_aside_mobile_toggle"
          >
            <span></span>
          </button>

          <button
            className="btn btn-hover-text-primary p-0 ml-2"
            id="kt_header_mobile_topbar_toggle"
            onClick={openTopbarHandler}
          >
            <span className="svg-icon svg-icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </span>{" "}
          </button>
        </div>
      </div>
      <div id="kt_header" className="header  header-fixed ">
        <div className="container-fluid  d-flex align-items-stretch justify-content-between align-items-center">
          <div className={`${styles.customHamburger}`}>
            <button
              className={`brand-toggle btn btn-sm px-0`}
              id="kt_aside_toggle"
            >
              <span className="">
                <HamburgerMenu onClickFunc={() => setToggleSidebar(prev => !prev)} />
              </span>{" "}
            </button>
          </div>
          <div className="topbar ml-auto">
            <div className="d-flex align-items-center">
              <div className="mr-4">
                <HeaderSearchIcon />
              </div>
              <div className="mr-4">
                <HeaderNotificationIcon />
              </div>
              <div>
                <div style={{ height: "30px", width: "2px", background: "#e6e8ee" }}></div>
              </div>
            </div>
            <div className="dropdown ml-3">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-offset="10px,0px"
                style={{cursor:"pointer"}}
              >
                <a className="d-flex align-items-center">
                  <div className="symbol symbol-30 symbol-circle symbol-primary mr-3">
                    <span className="symbol-label">
                      {
                        name ? 
                        `${name[0]?.toUpperCase()}${String(name)?.split(" ")?.length > 1 ? name.split(" ").pop().trim()[0].toUpperCase() : ""}` 
                       : ""
                      }
                    </span>
                  </div>
                  <div className="d-flex flex-column text-left">
                    <span className="font-weight-bold">
                      {name}
                    </span>
                  </div>
                  <div className="ml-3"
                    data-toggle="dropdown"
                    data-offset="10px,0px" style={{ cursor: "pointer" }}>
                    <Arrow />
                  </div>
                </a>
              </div>
              <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                <div className="row row-paddingless">
                  <div className="col-12">
                    <a
                      onClick={logoutHandler}
                      className="d-block py-6 px-5 text-center bg-hover-light border-bottom"
                    >
                      <span className="svg-icon svg-icon-3x svg-icon-success">
                      </span>{" "}
                      <span className="d-block text-dark-75 font-weight-bold font-size-h10 mt-2 mb-1">
                        Logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

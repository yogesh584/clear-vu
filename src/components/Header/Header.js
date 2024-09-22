import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout, sidebarToggle } from "../../store/auth/action";
import { Arrow, HamburgerMenu, HeaderSearchIcon, HeaderNotificationIcon } from "../../util/Svg";
import useRequest from "../../hooks/useRequest"
import notification from "../../util/toastifyNotifications"


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
        <div className=" container-fluid  d-flex align-items-stretch justify-content-between align-items-center">
          <div className="d-flex">
            <button
              // onClick={}
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
              >
                <a className="d-flex align-items-center">
                  <div className="symbol symbol-30 symbol-circle symbol-primary mr-3">
                    <span className="symbol-label">
                      {name[0].toUpperCase()}{String(name).split(" ").length > 1 ? String(name).split(" ")[1][0].toUpperCase() : ""}
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
                  {/* <div className="col-6">
                    <Link
                      to="/my-profile"
                      className="d-block py-6 px-5 text-center bg-hover-light border-right border-bottom"
                    >
                      <span className="svg-icon svg-icon-3x svg-icon-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          //
                          //xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                              fill="#000000"
                              fillRule="nonzero"
                              transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                            />
                            <rect
                              fill="#000000"
                              opacity="0.3"
                              x="5"
                              y="20"
                              width="15"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>
                      </span>{" "}
                      <span className="d-block text-dark-75 font-weight-bold font-size-h10 mt-2 mb-1">
                        Edit Profile
                      </span>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="/change-password"
                      className="d-block py-6 px-5 text-center bg-hover-light border-right border-bottom"
                    >
                      <span className="svg-icon svg-icon-3x svg-icon-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          //
                          //xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <path
                              d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>{" "}
                      <span className="d-block text-dark-75 font-weight-bold font-size-h10 mt-2 mb-1">
                        Change Password
                      </span>
                    </Link>
                  </div> */}

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

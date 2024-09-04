import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import Chart from "../../components/Chart/Chart";
import useRequest from "../../hooks/useRequest";

const Dashboard = () => {
  console.log("here : ")
  const history = useNavigate();
  const [counts, setTotalCounts] = useState({
    jobSeekers: {
      active: 0,
      deactive: 0,
    },
    employers: {
      active: 0,
      deactive: 0,
    }
  });

  const { request, response } = useRequest();

  useEffect(() => {
    request("GET", "miscellaneous/count");
    document.title = "Dashboard - clear vu";
  }, []);

  useEffect(() => {
    if (response) {
      setTotalCounts(response?.counts);
    }
  }, [response]);

  return (
    <>
      <div
        className="content  d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div
          className="subheader py-2 py-lg-4  subheader-solid "
          id="kt_subheader"
        >
          <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-1">
              <div className="d-flex align-items-baseline flex-wrap mr-5">
                <h5 className="text-dark font-weight-bold my-1 mr-5">
                  Dashboard{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column-fluid">
          <div className=" container ">
            <div className="row">
              <div className="col-xl-4">
                <div
                  // to={"/students"}
                  style={{
                    cursor: "default",
                  }}
                  className="card card-custom bg-danger bg-hover-state-danger card-stretch gutter-b"
                >
                  <div className="card-body">
                    <span className="svg-icon svg-icon-white svg-icon-3x ml-n1">
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
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push({
                            pathname: "/students",
                            state: { isActive: true },
                          });
                        }}
                      >
                        {counts.jobSeekers?.active} Active
                      </div> */}
                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push({
                            pathname: "/students",
                            state: { isActive: false },
                          });
                        }}
                      >
                        {counts.jobSeekers?.deactive} Inactive
                      </div> */}
                      <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push("/candidate");
                        }}
                      >
                        {+counts.jobSeekers?.active +
                          +counts.jobSeekers?.deactive}{" "}
                        Total
                      </div>
                    </div>

                    <div className="font-weight-bold text-inverse-danger font-size-sm">
                      Job Seekers
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div
                  // to={"/students"}
                  style={{
                    cursor: "default",
                  }}
                  className="card card-custom bg-danger bg-hover-state-danger card-stretch gutter-b"
                >
                  <div className="card-body">
                    <span className="svg-icon svg-icon-white svg-icon-3x ml-n1">
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
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push({
                            pathname: "/students",
                            state: { isActive: true },
                          });
                        }}
                      >
                        {counts.jobSeekers?.active} Active
                      </div> */}
                      {/* <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push({
                            pathname: "/students",
                            state: { isActive: false },
                          });
                        }}
                      >
                        {counts.jobSeekers?.deactive} Inactive
                      </div> */}
                      <div
                        style={{ cursor: "pointer" }}
                        className="text-inverse-danger font-weight-bolder font-size-h3 mb-2 mt-5"
                        onClick={() => {
                          history.push("/employer");
                        }}
                      >
                        {+counts.employers?.active +
                          +counts.employers?.deactive}{" "}
                        Total
                      </div>
                    </div>

                    <div className="font-weight-bold text-inverse-danger font-size-sm">
                      Employers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Chart /> */}

            {/* <div className="row">
              <div className="col-12">
                <div className="card card-custom gutter-b">
                  <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder text-dark">
                        students
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <Link
                        to="/students"
                        className="btn btn-info font-weight-bolder font-size-sm mr-3"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-3">
                    <div className="tab-content">
                      <div className="table-responsive">
                        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                          <thead>
                            <tr className="text-left text-uppercase">
                              <th>
                                <span className="text-dark-75">SN</span>
                              </th>
                              <th
                                style={{ minWidth: "250px" }}
                                className="pl-7"
                              >
                                <span className="text-dark-75">First Name</span>
                              </th>
                              <th
                                style={{ minWidth: "250px" }}
                                className="pl-7"
                              >
                                <span className="text-dark-75">Last Name</span>
                              </th>
                              <th style={{ minWidth: "100px" }}>
                                <span className="text-dark-75">Email</span>
                              </th>
                              <th style={{ minWidth: "250px" }}>
                                <span className="text-dark-75">
                                  Phone Number
                                </span>
                              </th>
                              <th style={{ minWidth: "130px" }}>
                                <span className="text-dark-75">Status</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.length > 0 &&
                              students.map((seeker, index) => (
                                <tr key={seeker._id}>
                                  <td>
                                    <div className="symbol symbol-30 symbol-light mr-4">
                                      <span className="symbol-label font-weight-bold text-dark-75">
                                        {index + 1}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="pl-0 py-8">
                                    <div className="d-flex align-items-center">
                                      <div className="text-muted1 font-weight-bold d-block">
                                        {seeker.firstName}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="pl-0 py-8">
                                    <div className="d-flex align-items-center">
                                      <div className="text-muted1 font-weight-bold d-block">
                                        {seeker.lastName}
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted1 font-weight-bold d-block">
                                      {seeker.email}
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted1 font-weight-bold d-block">
                                      {seeker.contact}
                                    </span>
                                  </td>
                                  <td>
                                    <span
                                      className={`label label-lg label-light${
                                        seeker.isActive == "true"
                                          ? "-success"
                                          : "-danger"
                                      }  label-inline`}
                                    >
                                      {seeker.isActive == "true"
                                        ? "Active"
                                        : "Inactive"}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

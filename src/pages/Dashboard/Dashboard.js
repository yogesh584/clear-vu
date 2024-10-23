import React, { useEffect } from "react";
import DashboardComp from "../../components/Dashboard/Dashboard";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - ClearVu-IQ";
  }, []);


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
                  <DashboardComp />
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column-fluid">
          <div className=" container ">


            {/* <Chart /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

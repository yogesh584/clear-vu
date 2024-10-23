import React from "react";
const Footer = ({posType}) => {
  return (
    <div className="footer bg-white py-4 d-flex flex-lg-column " style={{ display: "none !important", position: posType, bottom: "0px" }}>
      {/* justify-content-between ------> add this for shift content to right side */}
      <div className=" container-fluid  d-flex flex-column flex-md-row align-items-center">
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted mr-2" style={{fontWeight: "normal"}}>Copyright &copy; {new Date().getFullYear()} ClearVu-IQ</span>
          {/* <a target="_blank" className="text-dark-75 text-hover-primary">
            {title}
          </a> */}
        </div>
        <div className="nav nav-dark"></div>
      </div>
    </div>
  );
};

export default Footer;

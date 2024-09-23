import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import useRequest from "../../hooks/useRequest";

import "../Login/Login.css";
import { HorizontalArrow } from "../../util/Svg";
import { toast } from "react-toastify";
import ResendTimer from "../../components/ResendTimer/ResendTimer"
const ForgotPasswordCode = () => {
  const history = useHistory();
  const { email, token } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { request: verifyOtpRequest, response: verifyOtpResponse } = useRequest();
  const { request: resendOtpRequest, response: resendOtpResponse } = useRequest();

  useEffect(() => {
    document.title = "Forgot Password - Clear vu";
  }, []);

  useEffect(() => {

    if (token == null) {
      history.push("/forgot-password")
    }
  }, [token])

  const handleKeyDown = (index) => {
    tabChange(index);
  };

  let tabChange = function (val) {
    let ele = document.querySelectorAll(".otp_verification input");
    if (Array.from(ele)[val].value != "" && val + 1 < 6) {
      Array.from(ele)[val + 1].focus();
    } else if (Array.from(ele)[val].value == "" && val - 1 >= 0) {
      Array.from(ele)[val - 1].focus();
    }
  };


  const onSubmit = (data) => {
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = data;
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    verifyOtpRequest("post", "api/otp/verify", {
      "otp": otp,
      "emailId": email
    })
  };

  useEffect(() => {
    if (verifyOtpResponse) {
      history.push("/reset-password")
    }
  }, [verifyOtpResponse])

  // const resendOtp = () => {
  //   resendOtpRequest("post", "api/otp/resend", {"emailId":email})
  // }

  useEffect(() => {
    if (resendOtpResponse) {
      toast.success("OTP sent successfully.")
    }
  }, [resendOtpResponse])

  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh", backgroundImage: "url(auth-bg.png)", backgroundSize: "cover" }}>
      <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid" style={{ maxWidth: "100%" }}>
        <div className="d-flex align-items-center  bgi-size-cover bgi-no-repeat flex-row-fluid login-container" style={{ maxHeight: "100vw" }}>
          <div className="position-absolute top-0 left-0" style={{ height: "35%" }} id="left-logo">
            <img src="Logo1.svg" className="h-100" />
          </div>

          <div className="login-content d-flex flex-column p-md-10 border-0 bg-transparent align-items-start  justify-content-center mr-18" >
            <button className="bg-transparent border-0" onClick={() => history.push("/forgot-password")}>
              <HorizontalArrow dir={"left"} />
            </button>
            <a href="/" className="login-logo pb-8 text-center mt-2">
              <img src="./logo.png" className="max-h-80px" alt="" />
            </a>

            <div className="login-form w-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="form"
                id="kt_login_singin_form"
              >
                <div className="pb-3 pb-lg-15">
                  <h2 className="font-weight-bolder font-size-h1 font-size-h1-lg mb-2" style={{ letterSpacing: "0.03em" }}>
                    Forgot Password
                  </h2>
                  <span style={{ color: "#aaabad", fontWeight: "normal" }}>Enter the code sent to your email address to proceed</span>
                </div>

                <div className="form-group mb-3">
                  <input
                    className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.email && "is-invalid"
                      }`}
                    style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em", fontWeight: "bold" }}
                    type="text"
                    name="username"
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    disabled={true}
                    value={email}
                  />
                  {errors.email?.type === "required" && (
                    <div className="invalid-feedback">
                      The email field is required.
                    </div>
                  )}
                  {errors.email?.type === "pattern" && (
                    <div className="invalid-feedback">
                      The email must be a valid email address.
                    </div>
                  )}
                </div>
                <div>
                  Enter Code
                </div>
                <div className="form-group d-flex otp_verification">

                  <input type="text" onKeyUp={() => { handleKeyDown(0) }} name="otp1" {...register("otp1", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp1 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />
                  <input type="text" onKeyUp={() => { handleKeyDown(1) }} name="otp2" {...register("otp2", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp2 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />
                  <input type="text" onKeyUp={() => { handleKeyDown(2) }} name="otp3" {...register("otp3", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp3 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />
                  <input type="text" onKeyUp={() => { handleKeyDown(3) }} name="otp4" {...register("otp4", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp4 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />
                  <input type="text" onKeyUp={() => { handleKeyDown(4) }} name="otp5" {...register("otp5", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp5 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />
                  <input type="text" onKeyUp={() => { handleKeyDown(5) }} name="otp6" {...register("otp6", { required: true })} className={`border-left-0 border-top-0 border-right-0 bg-transparent mr-3`} style={{ width: "30px", borderBottom: errors.otp6 ? "2px solid red" : "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px" }} maxLength={1} />

                </div>
                <ResendTimer />
                <div className="pb-lg-0 pb-5 w-100">
                  <button
                    onClick={handleSubmit(onSubmit)}
                    style={{ display: "none" }}
                  ></button>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    href="#!"
                    id="kt_login_submit"
                    className="btn btn-primary font-weight-bolder rounded-xl text-light font-size-h6 px-4 py-3 my-3 mr-3 w-100 d-flex justify-content-between"
                  >
                    <span>
                      Reset Password
                    </span>
                    <div>
                      <HorizontalArrow dir={"right"} svgStyle={{ fill: "#fff" }} />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordCode;

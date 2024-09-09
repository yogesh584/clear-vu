import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import "../Login/Login.css";
import { HorizontalArrow } from "../../util/Svg";
const ForgotPasswordCode = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Forgot Password - Clear vu";
  }, []);

  const onSubmit = (data) => {
    const { email } = data;
    history.push("/reset-password")
  };

  return (
    <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-container d-flex align-items-center justify-content-end bgi-size-cover bgi-no-repeat flex-row-fluid p-8" style={{ maxHeight: "100vh" }}>
        <div className="position-absolute top-0 left-0 h-50">
          <img src="Logo1.svg" className="h-100" />
        </div>

        <div className="login-content d-flex flex-column p-5 p-md-10 border-0 bg-transparent align-items-start mr-18" >
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
                  style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  disabled={true}
                  value={"Jason_angelo14@email.com"}
                //   {...register("email", {
                //     required: true,
                //     pattern:
                //       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                //   })}
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
              <div className="form-group d-flex">
                
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                <input type="text" className="border-left-0 border-top-0 border-right-0 bg-transparent mr-3" style={{width: "30px", borderBottom: "2px solid #c6c9ce", outline: "0", textAlign: "center", fontSize: "19px"}} maxLength={1}/>
                
              </div>
              <div className=" my-4">
              Didn’t receive email?{" "}
                  <Link
                    to="/forgot-password"
                    className="font-size-h6 font-weight-bolder text-hover-primary"
                    style={{color: '#39d9a7'}}
                  >
                    Resend
                  </Link>
                </div>
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
  );
};

export default ForgotPasswordCode;

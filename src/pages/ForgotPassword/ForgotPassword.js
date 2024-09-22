import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { useDispatch } from "react-redux";
import { authSuccess } from "../../store/auth/action";
import notification from "../../util/toastifyNotifications"

import "../Login/Login.css";
import { HorizontalArrow } from "../../util/Svg";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const { request, response } = useRequest()

  useEffect(() => {
    document.title = "Forgot Password - Clear vu";
  }, []);

  const onSubmit = (data) => {
    const { email } = data;

    request('post', "pub/forgotpassword", {
      "emailId": email
    })
  };

  useEffect(() => {
    if (response) {
      const { responseMessage } = response;
      const { email } = getValues()
      dispatch(authSuccess({
        email: email,
        token: responseMessage,
        loggedIn: false
      }))
      notification.success("OTP sent successfully.", "An OTP has been sent to your email. Please check your inbox.")
      history.push("/forgot-password/code")
    }
  }, [response])

  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh", backgroundImage: "url(auth-bg.png)", backgroundSize: "cover" }}>
      <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid" style={{ maxWidth: "100%" }}>
        <div className="d-flex align-items-center  bgi-size-cover bgi-no-repeat flex-row-fluid login-container" style={{ maxHeight: "100vw" }}>
          <div className="position-absolute top-0 left-0" style={{ height: "35%" }} id="left-logo">
            <img src="Logo1.svg" className="h-100" />
          </div>

          <div className="login-content d-flex flex-column p-md-10 border-0 bg-transparent align-items-start  justify-content-center mr-18" >
            <button className="bg-transparent border-0" onClick={() => history.push("/login")}>
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
                  <span style={{ color: "#aaabad", fontWeight: "normal" }}>Enter your registered email address, we’ll send you a reset code</span>
                </div>

                <div className="form-group mb-3">
                  <input
                    className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.email && "is-invalid"
                      }`}
                    style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                    type="text"
                    name="username"
                    autoComplete="off"
                    placeholder="Enter email address"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
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
                      Send reset code
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

export default ForgotPassword;

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { authSuccess } from "../../store/auth/action";

import "./Login.css";
import { ClosedEyeIcon, HorizontalArrow, OpenEyeIcon } from "../../util/Svg";
import useRequest from "../../hooks/useRequest"
import { useDispatch } from "react-redux";
import notification from "../../util/toastifyNotifications"

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { request: loginRequest, response: loginResponse } = useRequest();

  useEffect(() => {
    document.title = "Login - Clear vu";
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;
    // dispatch(
    //   authSuccess({
    //     token: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTkyQ0JDLUhTMzg0IiwiZXhwIjowLCJhbGciOiJkaXIifQ..znPn-PBY5EXnl2AHlp5y9g.PQz9R76l6iFYedLdVQ6i-eEUjb8Dd0Vpp86migjrGvBfu0pVyM_nW9eHO5di2LIXqsMl1-tvrvkupSn5HEdyJKAay1vMcIsiqs_LTAW4iBcQolq1SoRqCDYu85HSSahrKgPAlO45DLmOLid7mMY9Bh_nlVc7eMguhcZRn6GiJrkGOUn6gnzUMEEKV6hmJ-6gQPqs8XXIq4GR_jP4WYT7Vw.WcH7Z_IGKnkM6DGdgBTg2AeaXCixsBgt",
    //     email: "test2@clearvu.com",
    //     loggedIn: true,
    //     userId: 6,
    //     name: "admin",
    //     user_role_id: 1,
    //     permissions: {},
    //   })
    // );



    loginRequest("post", "pub/login", {
      "emailId": email,
      "password": password
    })
  };

  useEffect(() => {
    if (loginResponse) {
      const { responseMessage } = loginResponse;
      const email = getValues("email");

      dispatch(
        authSuccess({
          token: responseMessage,
          email: email,
          loggedIn: false
        })
      );

      notification.success("OTP sent successfully.", "An OTP has been sent to your email. Please check your inbox.")

      history.push("/login/2fa")
    }
  }, [loginResponse, dispatch])

  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh", backgroundImage: "url(auth-bg.png)", backgroundSize: "cover" }}>
      <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid" style={{ maxWidth: "100%" }}>
        <div className="d-flex align-items-center  bgi-size-cover bgi-no-repeat flex-row-fluid login-container" style={{ maxHeight: "100vw" }}>
          <div className="position-absolute top-0 left-0" style={{ height: "35%" }} id="left-logo">
            <img src="Logo1.svg" className="h-100" />
          </div>
          <div className="login-content d-flex flex-column p-md-10 border-0 bg-transparent align-items-start justify-content-center mr-18" >
            <a href="#!" className="login-logo pb-8 text-center">
              <img src="./logo.png" className="max-h-80px" alt="" />
            </a>

            <div className="login-form w-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="form"
                id="kt_login_singin_form"
              >
                <div className="pb-5 pb-lg-15">
                  <h2 className="font-weight-bolder font-size-h1 font-size-h1-lg mb-2" style={{ letterSpacing: "0.03em" }}>
                    Login to your account
                  </h2>
                  <span style={{ color: "#aaabad", fontWeight: "normal" }}>Enter your login credentials to continue</span>
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

                <div className="form-group">
                  <div className="position-relative">
                    <input
                      className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.password && "is-invalid" /*: "is-valid"*/
                        }`}
                      style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                      })}
                    />
                    {isPasswordVisible ? (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() =>
                          setIsPasswordVisible(false)
                        }
                      >
                        <ClosedEyeIcon />
                      </span>
                    ) : (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() => setIsPasswordVisible(true)}
                      >
                        <OpenEyeIcon />
                      </span>
                    )}
                  </div>
                  {errors.password?.type === "required" && (
                    <div className="invalid-feedback">
                      The password field is required.
                    </div>
                  )}
                  {errors.password?.type === "pattern" && (
                    <div className="invalid-feedback">
                      Password must be of 8 characters long with atleast one
                      uppercase, one lowercase and one number.
                    </div>
                  )}

                </div>
                <div className="d-flex justify-content-between my-2">

                  <Link
                    to="/forgot-password"
                    className="font-size-h6 font-weight-bolder text-hover-primary"
                    style={{ color: '#39d9a7', textDecoration: "underline" }}
                  >
                    Forgot Password
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
                      Login to your account
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

export default Login;

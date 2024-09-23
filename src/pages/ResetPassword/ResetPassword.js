import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useRequest from "../../hooks/useRequest"
import { useDispatch, useSelector } from "react-redux";
import { authSuccess } from "../../store/auth/action";


import "../Login/Login.css";
import { ClosedEyeIcon, HorizontalArrow, OpenEyeIcon } from "../../util/Svg";
import notification from "../../util/toastifyNotifications"

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { email } = useSelector((state) => state.auth);

  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const { request: resetPasswordRequest, response: resetPasswordResponse } = useRequest();


  useEffect(() => {
    document.title = "Reset Password - Clear vu";
  }, []);

  const onSubmit = (data) => {
    const { cpassword, password } = data;

    if (password !== cpassword) {
      setError("cpassword", {
        type: "manual",
        message: "Confirm password do not match.",
      });
      return;
    }
    resetPasswordRequest("post", "pub/reset/password", {
      "emailId": email,
      "password": password,
      "confirmPassword": cpassword
    });
  };

  console.log("errors ; ", errors);


  useEffect(() => {
    if (resetPasswordResponse) {
      dispatch(
        authSuccess({
          token: "",
          email: "",
          loggedIn: false
        })
      );
      notification.success("Your password was updated successfully.", "Your password has been successfully changed. Now you canlog in using your new password.")
      history.push("/login")
    }
  }, [resetPasswordResponse])

  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh", backgroundImage: "url(auth-bg.png)", backgroundSize: "cover" }}>
      <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid" style={{ maxWidth: "100%" }}>
        <div className="d-flex align-items-center  bgi-size-cover bgi-no-repeat flex-row-fluid login-container" style={{ maxHeight: "100vw" }}>
          <div className="position-absolute top-0 left-0" style={{ height: "35%" }} id="left-logo">
            <img src="Logo1.svg" className="h-100" />
          </div>
          <div className="login-content d-flex flex-column p-md-10 border-0 bg-transparent align-items-start justify-content-center mr-18" >
            <button className="bg-transparent border-0" onClick={() => history.push("/forgot-password")}>
              <HorizontalArrow dir={"left"} />
            </button>
            <a href="#!" className="login-logo pb-8 text-center mt-3">
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
                    Reset Password
                  </h2>
                  <span style={{ color: "#aaabad", fontWeight: "normal" }}>Enter your new password to proceed</span>
                </div>

                <div className="form-group mb-3">

                  <div className="position-relative">
                    <input
                      className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.password && "is-invalid" /*: "is-valid"*/
                        }`}
                      style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                      type={isPasswordVisible1 ? "text" : "password"}
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      })}
                    />
                    {isPasswordVisible1 ? (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() =>
                          setIsPasswordVisible1(() => false)
                        }
                      >
                        <ClosedEyeIcon />
                      </span>
                    ) : (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() => setIsPasswordVisible1(() => true)}
                      >
                        <OpenEyeIcon />
                      </span>
                    )}
                  </div>
                  {errors.password?.type === "required" && (
                    <div className="invalid-feedback" style={{ display: "inline-block" }}>
                      The password field is required.
                    </div>
                  )}
                  {errors.password?.type === "pattern" && (
                    <div className="invalid-feedback" style={{ display: "inline-block" }}>
                      Password must be of 8 characters long with atleast one
                      uppercase, one lowercase and one number.
                    </div>
                  )}

                </div>

                <div className="form-group">

                  <div className="position-relative">
                    <input
                      className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${errors.password && "is-invalid" /*: "is-valid"*/
                        }`}
                      style={{ border: "2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em" }}
                      type={isPasswordVisible2 ? "text" : "password"}
                      name="cpassword"
                      autoComplete="off"
                      placeholder="Confirm Password"
                      {...register("cpassword", {
                        required: true,
                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      })}
                    />
                    {isPasswordVisible2 ? (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() =>
                          setIsPasswordVisible2(() => false)
                        }
                      >
                        <ClosedEyeIcon />
                      </span>
                    ) : (
                      <span
                        className="position-absolute" style={{ top: "50%", right: "15px", transform: "translateY(-50%)", cursor: "pointer" }}
                        onClick={() => setIsPasswordVisible2(() => true)}
                      >
                        <OpenEyeIcon />
                      </span>
                    )}
                  </div>
                  {errors.cpassword?.type === "required" && (
                    <div className="invalid-feedback" style={{ display: "inline-block" }}>
                      The Confirm new password field is required.
                    </div>
                  )}
                  {errors.cpassword?.type === "pattern" && (
                    <div className="invalid-feedback" style={{ display: "inline-block" }}>
                      Password must be of 8 characters long with atleast one
                      uppercase, one lowercase and one number.
                    </div>
                  )}
                  {errors.cpassword?.type === "manual" && (
                    <div className="invalid-feedback" style={{ display: "inline-block" }}>
                      Confirm password do not match.
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

export default ResetPassword;

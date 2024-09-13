import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link,useHistory } from "react-router-dom";
import { authSuccess } from "../../store/auth/action";

import "./Login.css";
import { HorizontalArrow } from "../../util/Svg";
import useRequest from "../../hooks/useRequest"
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const {request: loginRequest, response: loginResponse} = useRequest();

  useEffect(() => {
    document.title = "Login - Clear vu";
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;
    loginRequest("post","pub/login",{
      "emailId": email,
      "password": password
    })
  };

  useEffect(()=>{
    if(loginResponse){
      const {responseCode, responseMessage} = loginResponse;
      const email = getValues("email");
      
      dispatch(
        authSuccess({
          token: responseMessage,
          email: email,
          loggedIn: false
        })
      );

      history.push("/login/2fa")
    }
  },[loginResponse])

  return (
    <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid" style={{backgroundImage: "url(auth-bg.png)", backgroundSize: "100%"}}>
      <div className="login-container d-flex align-items-center justify-content-end bgi-size-cover bgi-no-repeat flex-row-fluid p-8" style={{maxHeight: "100vh"}}>
        <div className="position-absolute top-0 left-0" style={{height: "35%"}}>
          <img src="Logo1.svg" className="h-100"/>
        </div>
        <div className="login-content d-flex flex-column p-5 p-md-10 border-0 bg-transparent align-items-start justify-content-center mr-18" >
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
                <h2 className="font-weight-bolder font-size-h1 font-size-h1-lg mb-2" style={{letterSpacing: "0.03em"}}>
                  Login to your account
                </h2>
                <span style={{color: "#aaabad", fontWeight: "normal"}}>Enter your login credentials to continue</span>
              </div>

              <div className="form-group mb-3">
                <input
                  className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${
                    errors.email && "is-invalid"
                  }`} 
                  style={{border:"2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em"}}
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
                
                <input
                  className={`form-control form-control-solid h-auto py-3 px-6 rounded-xl ${
                    errors.password && "is-invalid" /*: "is-valid"*/
                  }`}
                  style={{border:"2px solid #e6e8ea", background: "#fff", letterSpacing: "0.03em"}}
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    // pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <div className="invalid-feedback">
                    The password field is required.
                  </div>
                )}
                {/* {errors.password?.type === "pattern" && (
                  <div className="invalid-feedback">
                    Password must be of 8 characters long with atleast one
                    uppercase, one lowercase and one number.
                  </div>
                )} */}
                
              </div>
              <div className="d-flex justify-content-between my-2">

                  <Link
                    to="/forgot-password"
                    className="font-size-h6 font-weight-bolder text-hover-primary"
                    style={{color: '#39d9a7',  textDecoration: "underline"}}
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
                    <HorizontalArrow dir={"right"} svgStyle={{fill: "#fff"}}/>
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

export default Login;

/*    PACKAGE IMPORTS    */
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Navigate, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import useRequest from "./hooks/useRequest";
import { authSuccess, logout } from "./store/auth/action";
import { addSetting } from "./store/setting/action";

import { privateRoutes, notPrivateRoutes } from "./util/routes";
import { permissionObj } from "./util/permission";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [token, setToken] = useState(null);
  const [filteredPrivateRoutes, setFilteredPrivateRoutes] =
    useState(privateRoutes);

  const dispatch = useDispatch();
  const { loggedIn, loading } = useSelector(
    (state) => state.auth
  );

  const { request, response } = useRequest();
  

  const routePath = useLocation();

  useEffect(() => {
    onTop();
  }, [routePath]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authSuccess({ loggedIn: false }));
    } else {
      setToken(token);
    }
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     request("POST", "admin/verify", { token });
  //   }
  // }, [token]);

  useEffect(() => {
    // if (response) {
    //   if (!response.status) {
    //     dispatch(logout());
    //   } else {
    //     const setting = {};

    //     response.setting.forEach((s) => {
    //       setting[s.newKey] = s.selected || s.value;
    //     });

    //     dispatch(
    //       authSuccess({
    //         loggedIn: true,
    //         token,
    //         userId: response.id,
    //         name: response.name,
    //         email: response.email,
    //         roleId: response.roleId,
    //         permission: response?.permissions
    //           ? permissionObj(response.permissions)
    //           : {},
    //       })
    //     );
    //     dispatch(addSetting(setting));
    //   }
    // }

    dispatch(
      authSuccess({
        loggedIn: true,
        token,
        userId: 1,
        name: "John Tomas",
        email: "jthomas@mailinator.com",
        roleId: 1,
        permission: {}
      })
    )
  }, [response]);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        {loading && <Loading />}
        {loggedIn !== null && (
          <>
            {loggedIn ? (
              <>
                <Sidebar />
                <div
                  className="d-flex flex-column flex-row-fluid wrapper"
                  id="kt_wrapper"
                >
                  <Header />
                  <Routes>
                    {filteredPrivateRoutes.map((route, index) => (
                      <Route key={index} exact {...route} />
                    ))}
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>

                  <Footer />
                </div>
              </>
            ) : (
              <Routes>
                {notPrivateRoutes.map((route, index) => (
                  <Route key={index} exact {...route} />
                ))}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
            <ToastContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

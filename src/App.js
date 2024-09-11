import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import useRequest from "./hooks/useRequest";
import { authSuccess, logout } from "./store/auth/action";
import { addSetting } from "./store/setting/action";

import {
  privateRoutes,
  notPrivateRoutes,
  noLayoutPrivateRoutes,
} from "./util/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import { getPermissionsObject } from "./util/fn";

const App = () => {
  const [token, setToken] = useState(null);
  const [filteredPrivateRoutes, setFilteredPrivateRoutes] =
    useState(privateRoutes);

  const [toggleSidebar,setToggleSidebar] = useState(false);

  // const [filteredNoLayoutPrivateRoutes, setFilteredNoLayoutPrivateRoutes] =
  //   useState(noLayoutPrivateRoutes);

  const dispatch = useDispatch();
  const { loggedIn, loading, permissions, user_role_id } = useSelector(
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

  useEffect(()=>{
    if (token) {
      dispatch(
        authSuccess({
          loggedIn: true,
          token : token,
          name: "skjdf"
        })
      )
    }
  },[token])



  // useEffect(() => {
  //   if (response) {
  //     if (!response.status) {
  //       dispatch(logout());
  //     } else {
  //       const setting = {};

  //       response.setting.forEach((s) => {
  //         setting[s.newKey] = s.selected || s.value;
  //       });

  //       dispatch(
  //         authSuccess({
  //           loggedIn: true,
  //           token,
  //           userId: response.id,
  //           name: response.name,
  //           email: response.email,
  //           user_role_id: response.user_role_id,
  //           permissions: response.permissions
  //             ? getPermissionsObject(JSON.parse(response.permissions))
  //             : {},
  //         })
  //       );
  //       dispatch(addSetting(setting));
  //     }
  //   }
  // }, [response]);

  useEffect(() => {
    if (user_role_id === 2) {
      setFilteredPrivateRoutes((prev) => {
        return prev.filter((r) => !!permissions[r.key]);
      });
      // setFilteredNoLayoutPrivateRoutes((prev) => {
      //   return prev.filter((r) => !!permissions[r.key]);
      // });
    }
  }, [permissions, user_role_id]);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  console.log("logged in : ", loggedIn);
  

  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        {loading && <Loading />}
        {loggedIn !== null && (
          <>
            {loggedIn ? (
              <>
                <Sidebar toggleSidebar={toggleSidebar}/>
                <div
                  className="d-flex flex-column flex-row-fluid wrapper"
                  id="kt_wrapper"
                >
                  <Header setToggleSidebar={setToggleSidebar}/>
                  <Switch>
                    {filteredPrivateRoutes.map((route, index) => (
                      <Route
                        key={index}
                        exact
                        component={route.component}
                        path={route.path}
                      />
                    ))}
                    <Redirect to="/" />
                  </Switch>
                  <Footer />
                </div>
                {/* <Switch>
                  {noLayoutPrivateRoutes.map((route, index) => (
                    <Route
                      key={index}
                      exact
                      component={route.component}
                      path={route.path}
                    />
                  ))}
                </Switch> */}
                {/* <Switch>
                  {noLayoutPrivateRoutes.map((route, index) => (
                    <Route
                      key={index}
                      exact
                      component={route.component}
                      path={route.path}
                    />
                  ))}
                  <div
                    className="d-flex flex-column flex-row-fluid wrapper"
                    id="kt_wrapper"
                  >
                    <Header />
                    {filteredPrivateRoutes.map((route, index) => (
                      <Route
                        key={index}
                        exact
                        component={route.component}
                        path={route.path}
                      />
                    ))}
                    <Footer />
                  </div>

                  <Redirect to="/" />
                </Switch> */}
              </>
            ) : (
              <Switch>
                {notPrivateRoutes.map((route, index) => (
                  <Route key={index} exact {...route} />
                ))}
                <Redirect to="/login" />
              </Switch>
            )}
            <ToastContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

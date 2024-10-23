import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { authSuccess } from "./store/auth/action";

import {
  privateRoutes,
  notPrivateRoutes
} from "./util/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [token, setToken] = useState(null);
  const [filteredPrivateRoutes, setFilteredPrivateRoutes] =
    useState(privateRoutes);

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const dispatch = useDispatch();
  const { loggedIn, loading, permissions, user_role_id } = useSelector(
    (state) => state.auth
  );

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
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(
        authSuccess({
          loggedIn: true,
          token: token,
        })
      )
    }
  }, [token])

  useEffect(() => {
    if (user_role_id === 2) {
      setFilteredPrivateRoutes((prev) => {
        return prev.filter((r) => !!permissions[r.key]);
      });
    }
  }, [permissions, user_role_id]);

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
                <Sidebar toggleSidebar={toggleSidebar} />
                <div
                  className="d-flex flex-column flex-row-fluid wrapper"
                  id="kt_wrapper"
                  style={{minHeight: "100vh", position: "relative"}}
                >
                  <Header setToggleSidebar={setToggleSidebar} />
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
                  <Footer posType="relative"/>
                </div>
              </>
            ) : (
              <div className="d-flex flex-column flex-column-fluid page">
                <Switch>
                  {notPrivateRoutes.map((route, index) => (
                    <Route key={index} exact {...route} />
                  ))}
                  <Redirect to="/login" />
                </Switch>
                <Footer posType="sticky"/>
              </div>
            )}
            <ToastContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

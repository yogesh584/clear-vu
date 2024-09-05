import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
// import SetPassword from "../pages/SetPassword/SetPassword.js";

import Dashboard from "../pages/Dashboard/Dashboard";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

export const privateRoutes = [
  { path: "/", component: Dashboard, key: "0" },
  { path: "/change-password", component: ChangePassword, key: "0" }
];

export const notPrivateRoutes = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
  // { path: "/set-password/:token", component: SetPassword },
  { path: "/reset-password/:token", component: ResetPassword },
];
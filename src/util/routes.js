import Login from "../pages/Login/Login";
import Login2FA from "../pages/Login2FA/Login2FA";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ForgotPasswordCode from "../pages/ForgotPassword/ForgotPasswordCode";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
// import SetPassword from "../pages/SetPassword/SetPassword.js";

import Dashboard from "../pages/Dashboard/Dashboard";
import InventoryManagment from "../pages/Inventory/Managment";
import InventoryRequests from "../pages/Inventory/Requests";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

export const privateRoutes = [
  { path: "/", component: Dashboard, key: "0" },
  { path: "/inventory-managment", component: InventoryManagment, key: "1" },
  { path: "/inventory-requests", component: InventoryRequests, key: "1_1" },
  { path: "/change-password", component: ChangePassword, key: "2" }
];

export const notPrivateRoutes = [
  { path: "/login", component: Login },
  { path: "/login/2fa", component: Login2FA },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/forgot-password/code", component: ForgotPasswordCode },
  { path: "/reset-password/", component: ResetPassword },
];
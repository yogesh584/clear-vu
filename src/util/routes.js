import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
// import SetPassword from "../pages/SetPassword/SetPassword.js";

import Dashboard from "../pages/Dashboard/Dashboard";
import InventoryManagment from "../pages/Inventory/Managment";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

export const privateRoutes = [
  { path: "/", component: Dashboard, key: "0" },
  { path: "/inventory-managment", component: InventoryManagment, key: "1" },
  { path: "/change-password", component: ChangePassword, key: "2" }
];

export const notPrivateRoutes = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/reset-password/:token", component: ResetPassword },
];
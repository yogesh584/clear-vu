import Login from "../pages/Login/Login";
import Login2FA from "../pages/Login2FA/Login2FA";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ForgotPasswordCode from "../pages/ForgotPassword/ForgotPasswordCode";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import UserManagment from "../pages/User/index"

import Dashboard from "../pages/Dashboard/Dashboard";
import InventoryManagment from "../pages/Inventory/Managment";
import InventoryRequests from "../pages/Inventory/Requests/Requests";
import RequestLineans from "../pages/Inventory/Requests/RequestLineans";
import InventoryChangeRoom from "../pages/Inventory/ChangeRoom";
// import DeliveryReceipt from "../pages/Inventory/Delivery/index";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

export const privateRoutes = [
  { path: "/", component: Dashboard, key: "0" },
  { path: "/change-password", component: ChangePassword, key: "0" },
  { path: "/inventory-managment", component: InventoryManagment, key: "1" },
  { path: "/inventory-requests", component: InventoryRequests, key: "1_1" },
  { path: "/inventory-change-room", component: InventoryChangeRoom, key: "1_2" },
  { path: "/inventory-requests/request-lineans", component: RequestLineans, key: "1_3" },
  // { path: "/inventory-delivery-tracking", component: DeliveryReceipt, key: "1_4" },
  { path: "/user-management", component: UserManagment, key: "2_1" }  
];

export const notPrivateRoutes = [
  { path: "/login", component: Login },
  { path: "/login/2fa", component: Login2FA },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/forgot-password/code", component: ForgotPasswordCode },
  { path: "/reset-password/", component: ResetPassword },
];
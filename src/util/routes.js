/*    AUTH ROUTES    */
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

/*      WEB IMPORTANT ROUTES     */
import Dashboard from "../pages/Dashboard/Dashboard";

export const privateRoutes = [
  { path: "/", component: Dashboard, key: "1" },
];
export const notPrivateRoutes = [
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/reset-password/:token", component: ResetPassword },
];

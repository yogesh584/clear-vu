import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  SIDEBAR_TOGGLE,
  LOADING,
  AUTH_SUCCESS_2FA
} from "./actionTypes";
import { toast } from "react-toastify";

export const authSuccess = (updates) => {
  return {
    type: AUTH_SUCCESS,
    updates,
  };
};

export const authSuccess2FA = (updates) => {
  if (updates.token) {
    localStorage.setItem("token", updates.token);
  }
  return {
    type: AUTH_SUCCESS_2FA,
    updates,
  };
};


export const sidebarToggle = (updates) => {
  return {
    type: SIDEBAR_TOGGLE,
    updates,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  // toast.success("You are now logged out!");
  return {
    type: AUTH_LOGOUT,
  };
};

export const updateLoading = (updates) => {
  return {
    type: LOADING,
    updates,
  };
};

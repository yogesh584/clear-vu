import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  SIDEBAR_TOGGLE,
  LOADING,
  AUTH_SUCCESS_2FA
} from "./actionTypes";

const initialState = {
  loggedIn: null,
  token: null,
  userId: null,
  email: null,
  name: null,
  isMobileSidebarOpen: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: 
    return {
      ...state,
      ...action.updates,
    };
    case AUTH_SUCCESS_2FA:
      return {
        ...state,
        loggedIn: true,
        ...action.updates,
      };
    case AUTH_LOGOUT:
      return {
        ...initialState,
        loggedIn: false,
      };
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        ...action.updates,
      };
    case LOADING:
      return {
        ...state,
        ...action.updates,
      };
    default:
      return state;
  }
};

export default authReducer;

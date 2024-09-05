import { ADD_SETTING } from "./actionTypes";

const initialState = {
  records_per_page: null,
  date_format: null,
  date_time_format: null,
  title: null,
  copyright : null,
  gst_percentage : null,
  gst_number : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SETTING:
      return {
        ...state,
        ...action.updates,
      };
    default:
      return state;
  }
};

export default authReducer;

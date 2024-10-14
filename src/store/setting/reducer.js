import { ADD_SETTING } from "./actionTypes";

const initialState = {
  records_per_page: null,
  date_format: null,
  date_time_format: null,
  title: null,
  copyright : `Copyright &copy; ${new Date().getFullYear()} ClearVu-IQ`,
  gst_percentage : null,
  gst_number : null,
};

const settingReducer = (state = initialState, action) => {
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

export default settingReducer;

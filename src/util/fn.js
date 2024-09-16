import moment from "moment"

export const getTimeGap = (start, end) => {
  let month = moment(end).diff(moment(start), "month");
  let year = moment(end).diff(moment(start), "year");
  month = month - year * 12;
  return {
    month,
    year,
  };
};

export const timeGapYearMonth = (start, end) => {
  let obj = getTimeGap(start, end);
  let str = "";
  if (obj.year > 0) {
    if (obj.year > 1) {
      str += obj.year + " years";
    } else {
      str += obj.year + " year";
    }
    if (obj.month > 0) {
      str += ", ";
    }
  }
  if (obj.month > 0) {
    if (obj.month > 1) {
      str += obj.month + " months";
    } else {
      str += obj.month + " month";
    }
  }
  return str;
};

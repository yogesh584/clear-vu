import { BASEURL } from "../constant/api";
import moment from "moment"
const BACKEND_URL = BASEURL.PORT;

export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  let d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

export const addOneToDate = (currDate) => {
  currDate.setDate(currDate.getDate() + 2);
  return (currDate = currDate.toISOString().split("T")[0]);
};

export const intersect = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

export const getPermissionsObject = (list = []) => {
  let obj = {};
  list.forEach(elem => [
    obj[elem] = true
  ])
  return obj
}

export const isHaveAccess = (key, permissions) => {
  return !!permissions[key]
}

export const getLatestCompany = (list = []) => {
  let latest = {};

  for (let i = 0; i < list.length; i++) {
    let elem = list[i];
    if (elem?.is_currently_working == 1) {
      latest = elem;
      break;
    }
    if (moment(elem.end_date) > moment(latest.end_date)) {
      latest = elem;
    }
  }

  return latest;
};

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


// export const getLatestCompany = (list = []) => {
//   let latest = {};

//   for (let i = 0; i < list.length; i++) {
//     let elem = list[i];
//     if (elem?.is_currently_working == 1) {
//       latest = elem;
//       break;
//     }
//     if (moment(elem.end_date) > moment(latest.end_date)) {
//       latest = elem;
//     }
//   }

//   return latest;
// };

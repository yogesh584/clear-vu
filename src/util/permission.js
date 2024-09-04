export const PERMISSION = [
  {
    name: "Dashboard",
    key: "1",
    children: [
      {
        name: "View Dashboard",
        key: "1_1",
        children: [],
      },
    ],
  },
  {
    name: "Customer Management",
    key: "2",
    children: [
      {
        name: "View All",
        key: "2_1",
        children: [],
      },
      {
        name: "Add",
        key: "2_2",
        children: [],
      },
      {
        name: "Change Status",
        key: "2_3",
        children: [],
      },
      {
        name: "View One",
        key: "2_4",
        children: [],
      },
      {
        name: "Edit",
        key: "2_5",
        children: [],
      },
      {
        name: "Delete",
        key: "2_6",
        children: [],
      },
      {
        name: "Change Password",
        key: "2_7",
        children: [],
      },
      {
        name: "Send Credentials",
        key: "2_8",
        children: [],
      },
    ],
  },

  {
    name: "Sub Admin Management",
    key: "4",
    children: [
      {
        name: "View All Sub Admin",
        key: "4_1",
        children: [],
      },
      {
        name: "Add Sub Admin",
        key: "4_2",
        children: [],
      },
      {
        name: "Edit Sub Admin",
        key: "4_3",
        children: [],
      },
      {
        name: "Change Password Sub Admin",
        key: "4_4",
        children: [],
      },
      {
        name: "Send Credential Sub Admin",
        key: "4_5",
        children: [],
      },
      {
        name: "Change Status Sub Admin",
        key: "4_6",
        children: [],
      },
      {
        name: "Delete Sub Admin",
        key: "4_7",
        children: [],
      },
      {
        name: "View One Sub Admin",
        key: "4_8",
        children: [],
      },
      {
        name: "View All Admin Role",
        key: "4_20",
        children: [],
      },
      {
        name: "Add Admin Role",
        key: "4_21",
        children: [],
      },
      {
        name: "Edit Admin Role",
        key: "4_22",
        children: [],
      },
      {
        name: "Change Status Admin Role",
        key: "4_23",
        children: [],
      },
      {
        name: "Delete Admin Role",
        key: "4_24",
        children: [],
      },
    ],
  },

  {
    name: "System Management",
    key: "12",
    children: [
      {
        name: "Cms Pages - View All",
        key: "12_1",
        children: [],
      },
      {
        name: "Cms Pages - View One",
        key: "12_2",
        children: [],
      },
      {
        name: "Cms Pages - Edit",
        key: "12_3",
        children: [],
      },
      {
        name: "Seo Pages - View All",
        key: "12_10",
        children: [],
      },
      {
        name: "Seo Pages - Edit",
        key: "12_11",
        children: [],
      },
      {
        name: "Seo Pages - Delete",
        key: "12_12",
        children: [],
      },
      {
        name: "Email Templates - View All",
        key: "12_20",
        children: [],
      },
      {
        name: "Email Templates - Edit",
        key: "12_21",
        children: [],
      },
      {
        name: "Email Logs - View All",
        key: "12_30",
        children: [],
      },
      {
        name: "Email Logs - View One",
        key: "12_31",
        children: [],
      },
      {
        name: "FAQs - View All",
        key: "12_40",
        children: [],
      },
      {
        name: "FAQs - Add",
        key: "12_41",
        children: [],
      },
      {
        name: "FAQs - Change Status",
        key: "12_42",
        children: [],
      },
      {
        name: "FAQs - Edit",
        key: "12_43",
        children: [],
      },
      {
        name: "FAQs - Delete",
        key: "12_44",
        children: [],
      },

      {
        name: "Notifications - View All",
        key: "12_100",
        children: [],
      },
      {
        name: "Notifications - Send",
        key: "12_101",
        children: [],
      },

      // {
      //   name: "Languages - View All",
      //   key: "12_140",
      //   children: [],
      // },
      // {
      //   name: "Languages - Change Status",
      //   key: "12_141",
      //   children: [],
      // },

      {
        name: "Contact Us - View All",
        key: "12_200",
        children: [],
      },
      // {
      //   name: "Newsletter Subscriptions - View All",
      //   key: "12_201",
      //   children: [],
      // },
    ],
  },
  {
    name: "Settings",
    key: "13",
    children: [
      {
        name: "View Settings",
        key: "13_1",
        children: [],
      },
      {
        name: "Site Settings",
        key: "13_2",
        children: [],
      },
      {
        name: "Reading Settings",
        key: "13_3",
        children: [],
      },
      {
        name: "Social Settings",
        key: "13_4",
        children: [],
      },
      {
        name: "Contact Settings",
        key: "13_5",
        children: [],
      },
    ],
  },
];

// functions -----------------

const defaultPermissions = {
  changePass: true,
  profile: true,
};

export const getFilteredRoutes = (routes, permission) => {
  permission = { ...permission, ...defaultPermissions };
  routes = routes.filter((route) => !!permission[route.key]);
  return routes;
};

export const getFilteredLinks = (links, permission) => {
  permission = { ...permission, ...defaultPermissions };
  return links.filter((link) => !!permission[link.key]);
};

export const getFilteredData = (datas, permission) => {
  permission = { ...permission, ...defaultPermissions };
  const filterArray = (arr) => {
    return (arr = arr.filter((ele) => {
      if (ele.subMenu && ele.subMenu.length > 0) {
        ele.subMenu = filterArray(ele.subMenu);
      }
      return !!permission[ele.key];
    }));
  };
  return filterArray(datas);
};

export const hasAccess = (key, permission) => {
  return !!permission[key];
};

export const getParent = (key) => {
  let lastNumDigits = key.split("_");
  lastNumDigits = lastNumDigits[lastNumDigits.length - 1].length;
  return key.substring(0, key.length - (lastNumDigits + 1));
};

export const permissionObj = (arr) => {
  let obj = {};
  arr.forEach((val) => {
    obj[val] = true;
  });
  return obj;
};

export const permissions = {};

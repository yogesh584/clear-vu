import {
  Dashboard,
  Inventory,
  UserSideBar,
  Report
} from "./Svg";

export const menu = [
  {
    name: "Dashboard",
    path: "/",
    Svg: Dashboard,
    subMenu: [],
    highlight: [],
    subHighlight: [],
    key: ["0"],
  },
  {
    name: "Inventory",
    path: "/inventory",
    Svg: Inventory,
    subMenu: [
      {
        name: "Management",
        path: "/inventory-managment",
        highlight: ["/inventory-management/add"],
        subHighlight: ["/inventory-managment/view", "/inventory-managment/edit"],
        key: ["1_1"],
      },
      {
        name: "Requests",
        path: "/inventory-requests",
        highlight: ["/inventory-requests/add"],
        subHighlight: ["/inventory-requests/view", "/inventory-requests/edit"],
        key: ["1_1"],
      },
      {
        name: "Change Room",
        path: "/inventory-change-room",
        highlight: ["/inventory-change-room/add"],
        subHighlight: ["/inventory-change-room/view", "/inventory-change-room/edit"],
        key: ["1_2"],
      },
      {
        name: "Delivery tracking",
        path: "/inventory-delivery-tracking",
        highlight: ["/inventory-delivery-tracking/add"],
        subHighlight: ["/inventory-delivery-tracking/view", "/inventory-delivery-tracking/edit"],
        key: ["1_3"],
      },
    ],
    highlight: [],
    subHighlight: [],
    key: ["1"],
  },
  {
    name: "User management",
    path: "/user-management",
    Svg: UserSideBar,
    subMenu: [],
    highlight: ["/user-management"],
    subHighlight: ["/user-management"],
    key: ["2"],
  },
  {
    name: "Reports",
    path: "/reports",
    Svg: Report,
    subMenu: [],
    highlight: [],
    subHighlight: [],
    key: ["3"],
  },
];

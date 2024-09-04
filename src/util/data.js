import {
  Dashboard, Inventory
} from "./Svg";

export const menu = [
  {
    name: "Dashboard",
    path: "/",
    Svg: Dashboard,
    subMenu: [],
    highlight: ["/my-profile", "/change-password"],
    subHighlight: [],
    key: ["1"],
  },
  {
    name: "Inventory",
    path: "/inventory",
    Svg: Inventory,
    subMenu: [],
    highlight: ["/inventory"],
    subHighlight: [],
    key: ["2"],
  }
];

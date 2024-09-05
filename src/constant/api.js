export const API = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4042"
      : "",
};

export const BASEURL = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4042"
      : "",
};

export const FRONTENDURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4042"
    : "";

export const ADMINURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4042"
    : "";

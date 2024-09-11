export const API = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "",
};

export const BASEURL = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "",
};

export const FRONTENDURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "";

export const ADMINURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8080"
    : "";

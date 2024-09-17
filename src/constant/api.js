export const API = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "http://clearvu-alb-uat-1497630710.us-east-2.elb.amazonaws.com",
};

export const BASEURL = {
  PORT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "http://clearvu-alb-uat-1497630710.us-east-2.elb.amazonaws.com",
};

import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import moment from "moment";

import useRequest from "../../hooks/useRequest";

const mergeByOp = (a1, a2) =>
  a1.map((itm) => ({
    ...itm,
    ...a2.find((item) => item.option == itm.option && item),
  }));

const staticMonth = [
  { option: "Jan", count: 0 },
  { option: "Feb", count: 0 },
  { option: "Mar", count: 0 },
  { option: "Apr", count: 0 },
  { option: "May", count: 0 },
  { option: "Jun", count: 0 },
  { option: "July", count: 0 },
  { option: "Aug", count: 0 },
  { option: "Sept", count: 0 },
  { option: "Oct", count: 0 },
  { option: "Nov", count: 0 },
  { option: "Dec", count: 0 },
];

const enumerateDaysBetweenDates = () => {
  const startDate = moment().subtract(6, "d");
  const endDate = moment();

  let now = startDate,
    dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format("Do MMM"));
    now.add(1, "days");
  }

  return dates;
};

const staticWeeksHandler = () => {
  const staticWeeks = [
    {
      option: `${moment().startOf("isoWeek").format("DD/MM")} - ${moment()
        .endOf("isoWeek")
        .format("DD/MM")}`,
      users: 0,
    },
  ];

  for (let i = 1; i < 5; i++) {
    staticWeeks.unshift({
      option: `${moment()
        .subtract(i, "weeks")
        .startOf("isoWeek")
        .format("DD/MM")} - ${moment()
        .subtract(i, "weeks")
        .endOf("isoWeek")
        .format("DD/MM")}`,
      users: 0,
    });
  }

  return staticWeeks;
};

const Chart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    yaxis: {
      // tickAmount: 3,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  });

  const [employerOptions, setEmployerOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    yaxis: {
      // tickAmount: 3,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "New Job Seeker",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 95],
    },
  ]);

  const [employerSeries, setEmployerSeries] = useState([
    {
      name: "New Employers",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 95],
    },
  ]);

  const [totalEntries, setTotalEntries] = useState(0);

  const [totalEmployerEntries, setEmployerTotalEntries] = useState(0);

  const { response, request } = useRequest();
  const { response: employerChartResponse, request: employerChartReq } = useRequest();

  useEffect(() => {
    byHandler("month");
  }, []);

  useEffect(() => {
    if (response) {
      let graphData = response.timeline;

      if (response.by == "month") {
        const updatedMonths = mergeByOp(staticMonth, graphData);
        graphData = updatedMonths;
      } else if (response.by == "date") {
        const staticDate = enumerateDaysBetweenDates().map((d) => ({
          option: d,
          count: 0,
        }));
        graphData = graphData.map((d) => {
          const option = moment(d.option, "DD MMM").format("Do MMM");
          return { option, count: d.count };
        });
        const updatedDates = mergeByOp(staticDate, graphData);
        graphData = updatedDates;
      } else if (response.by == "week") {
        const updatedWeeks = mergeByOp(staticWeeksHandler(), graphData);
        graphData = updatedWeeks;
      }

      // console.log("user",graphData)

      setTotalEntries(graphData.reduce((a, curr) => a + curr.count, 0));

      setOptions((prev) => ({
        ...prev,
        xaxis: { categories: graphData.map((u) => u.option.toString()) },
      }));

      setSeries([
        {
          name: "Job Seeker",
          data: graphData.map((u) => u.count.toString()),
        },
      ]);
    }
  }, [response]);

  useEffect(() => {
    if (employerChartResponse) {
      let graphData = employerChartResponse.timeline;

      if (employerChartResponse.by == "month") {
        const updatedMonths = mergeByOp(staticMonth, graphData);
        graphData = updatedMonths;
      } else if (employerChartResponse.by == "date") {
        const staticDate = enumerateDaysBetweenDates().map((d) => ({
          option: d,
          count: 0,
        }));
        graphData = graphData.map((d) => {
          const option = moment(d.option, "DD MMM").format("Do MMM");
          return { option, count: d.count };
        });
        const updatedDates = mergeByOp(staticDate, graphData);
        graphData = updatedDates;
      } else if (employerChartResponse.by == "week") {
        const updatedWeeks = mergeByOp(staticWeeksHandler(), graphData);
        graphData = updatedWeeks;
      }

      // console.log("user",graphData)

      setEmployerTotalEntries(graphData.reduce((a, curr) => a + curr.count, 0));

      setEmployerOptions((prev) => ({
        ...prev,
        xaxis: { categories: graphData.map((u) => u.option.toString()) },
      }));

      setEmployerSeries([
        {
          name: "Employers",
          data: graphData.map((u) => u.count.toString()),
        },
      ]);
    }
  }, [employerChartResponse]);

  const byHandler = (by) => {
    request("GET", `miscellaneous/job-seeker-chart/${by}`);

    employerChartReq("GET", `miscellaneous/employer-chart/${by}`);
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card card-custom gutter-b card-stretch gutter-b">
          <div className="card-header h-auto border-0">
            <div className="card-title py-5">
              <h3 className="card-label">
                <span className="d-block text-dark font-weight-bolder">
                  Job Seekers
                </span>
                <span className="d-block text-muted mt-2 font-size-sm">
                  {/* More than {totalEntries-1} Job Seekers */}
                  {totalEntries} Job Seekers
                </span>
              </h3>
            </div>
            <div className="card-toolbar">
              <ul
                className="nav nav-pills nav-pills-sm nav-dark-75"
                role="tablist"
              >
                <li onClick={() => byHandler("year")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_1"
                  >
                    <span className="nav-text font-size-sm">Year</span>
                  </a>
                </li>
                <li onClick={() => byHandler("month")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4 active"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_1"
                  >
                    <span className="nav-text font-size-sm">Month</span>
                  </a>
                </li>
                {/* <li onClick={() => byHandler("week")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_2"
                  >
                    <span className="nav-text font-size-sm">Week</span>
                  </a>
                </li> */}
                <li onClick={() => byHandler("date")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4 "
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_3"
                  >
                    <span className="nav-text font-size-sm">Date</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                {/* <div id="kt_charts_widget_5_chart"></div> */}
                <ApexChart
                  options={options}
                  series={series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="card card-custom gutter-b card-stretch gutter-b">
          <div className="card-header h-auto border-0">
            <div className="card-title py-5">
              <h3 className="card-label">
                <span className="d-block text-dark font-weight-bolder">
                  Employers
                </span>
                <span className="d-block text-muted mt-2 font-size-sm">
                  {/* More than {totalEntries-1} Employers */}
                  {totalEmployerEntries} Employers
                </span>
              </h3>
            </div>
            <div className="card-toolbar">
              <ul
                className="nav nav-pills nav-pills-sm nav-dark-75"
                role="tablist"
              >
                <li onClick={() => byHandler("year")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_1"
                  >
                    <span className="nav-text font-size-sm">Year</span>
                  </a>
                </li>
                <li onClick={() => byHandler("month")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4 active"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_1"
                  >
                    <span className="nav-text font-size-sm">Month</span>
                  </a>
                </li>
                {/* <li onClick={() => byHandler("week")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4"
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_2"
                  >
                    <span className="nav-text font-size-sm">Week</span>
                  </a>
                </li> */}
                <li onClick={() => byHandler("date")} className="nav-item">
                  <a
                    className="nav-link py-2 px-4 "
                    data-toggle="tab"
                    href="#kt_charts_widget_2_chart_tab_3"
                  >
                    <span className="nav-text font-size-sm">Date</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                {/* <div id="kt_charts_widget_5_chart"></div> */}
                <ApexChart
                  options={employerOptions}
                  series={employerSeries}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

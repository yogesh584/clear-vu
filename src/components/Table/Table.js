import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { arrayMoveImmutable } from "array-move";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";

import {
  View,
  Edit,
  Delete,
  MakeDeactivate,
  MakeActivate,
  ChangePassword,
  SendCreds,
  SystemManagements,
  Download,
  SubTask,
} from "../../util/Svg";
import { API } from "../../constant/api";

const DragHandle = sortableHandle(() => (
  <span className="drag">
    <SystemManagements />
  </span>
));
const SortableContainer = sortableContainer(({ children }) => {
  return <tbody>{children}</tbody>;
});

const SortableItem = sortableElement(
  ({
    data,
    tableData,
    links,
    onlyDate,
    page,
    date_format,
    date_time_format,
    renderAs,
  }) => {
    const { role } = useSelector((state) => state.auth);

    return (
      <>
        <tr key={`item-${data}`} index={data}>
          <td className="pl-0 py-5">
            <DragHandle />
          </td>
          {tableData.map((tData, index) => {
            let value;
            if (tData == "description") {
              value = (
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(data[tData]),
                  }}
                ></p>
              );
            } else if (Object.keys(onlyDate).includes(tData)) {
              if (onlyDate[tData] === "date") {
                value = <Moment format={date_format}>{data[tData]}</Moment>;
              } else if (onlyDate[tData] === "dateTime") {
                value = (
                  <Moment format={date_time_format}>{data[tData]}</Moment>
                );
              }
            } else if (Object.keys(renderAs).includes(tData)) {
              value = renderAs[tData](data[tData], data.id, data);
            } else if (tData == "isActive" || tData == "is_active") {
              if (
                data[tData] == "true" ||
                data[tData] == true ||
                data[tData] == 1
              ) {
                value = (
                  <span className="label label-lg label-light-success label-inline">
                    Activated
                  </span>
                );
              } else {
                value = (
                  <span className="label label-lg label-light-danger label-inline">
                    Deactivated
                  </span>
                );
              }
            } else if (tData == "message") {
              value = truncate(data[tData]);
            } else if (tData == "amount") {
              value = `$${data[tData]}`;
            } else if (tData == "image") {
              value = (
                <img
                  src={`${API.PORT}/${data[tData]}`}
                  alt=""
                  data-fancybox
                  height={50}
                  width={80}
                  style={{ cursor: "pointer" }}
                />
              );
            } else if (tData === "answer") {
              value = (
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(data[tData]),
                  }}
                ></p>
              );
            }

            // else if (tData === "category") {
            //   if(data[tData] == "talent"){
            //     value = "Job Hunter";
            //   }else{
            //     value = data[tData];
            //   }
            // }
            else {
              value = data[tData];
            }

            return (
              <td key={index} className="py-5">
                <div className="d-flex align-items-center">
                  <div className="text-dark-75 mb-1  font-size-lg">{value}</div>
                </div>
              </td>
            );
          })}

          <td className="text-left pr-2" style={{ whiteSpace: "nowrap" }}>
            {links?.map((link, index) => {
              let name = link.name;
              let svg;

              if (name == "Edit") {
                svg = <Edit />;
              } else if (name == "Delete") {
                svg = <Delete />;
              } else if (name == "View") {
                svg = <View />;
              } else if (
                name == "Deactivate" &&
                (data.is_active ?? data.isActive) != "true" &&
                (data.is_active ?? data.isActive) != true &&
                (data.is_active ?? data.isActive) != 1
              ) {
                svg = <MakeActivate />;
              } else if (
                name == "Activate" &&
                (data.is_active ?? data.isActive) != "false" &&
                (data.is_active ?? data.isActive) != false &&
                (data.is_active ?? data.isActive) != 0
              ) {
                svg = <MakeDeactivate />;
              } else if (name == "ChangePassword") {
                svg = <ChangePassword />;
              } else if (name == "SendCreds") {
                svg = <SendCreds />;
              } else if (name == "SubDocument") {
                svg = <SubTask />;
              } else if (name == "category") {
                svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" /></svg>
              } else if (name == "course") {
                svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
              }

              if (link.isLink) {
                return (
                  <Link
                    key={index}
                    to={
                      link.extraData
                        ? { pathname: `${link.to}/${data.id}`, page }
                        : `${link.to}/${data.id}`
                    }
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mr-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-container="body"
                    data-boundary="window"
                    title={link.title || name}
                    data-original-title={link.title || name}
                  >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      {svg}
                    </span>
                  </Link>
                );
              } else {
                return (
                  <Fragment key={index}>
                    {svg && (
                      <a
                        key={index}
                        className={`btn btn-icon btn-light mr-2 ${name === "Delete"
                          ? "btn-hover-danger confirmDelete"
                          : "btn-hover-primary"
                          }  btn-sm `}
                        data-toggle="tooltip"
                        data-placement="top"
                        data-container="body"
                        data-boundary="window"
                        title={link.title || name}
                        data-original-title={link.title || name}
                      >
                        <span
                          onClick={() => link.click(data.id, data)}
                          className={`svg-icon svg-icon-md ${name === "Delete"
                            ? "svg-icon-danger"
                            : "svg-icon-primary"
                            }`}
                        >
                          {svg}
                        </span>
                      </a>
                    )}
                  </Fragment>
                );
              }
            })}
          </td>
        </tr>
      </>
    );
  }
);

const truncate = (input) =>
  input.length > 200 ? `${input.substring(0, 200)}...` : input;

const Table = ({
  mainData,
  tableHeading,
  tableData,
  links,
  sortingHandler,
  currentSort,
  onlyDate,
  page,
  dontShowSort = [],
  renderAs = {},
  sorting,
  changeOrderHandler,
  // status,
}) => {
  const [filteredLinks, setFilteredLinks] = useState([]);
  const { permissions, user_role_id } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user_role_id != 1) {
      let filtered = filteredLinks.filter((elem) => {
        let exists = false;
        elem.key.forEach((v) => {
          if (!!permissions[v]) {
            exists = true;
          }
        });
        return exists;
      });
      setFilteredLinks(filtered);
    }
  }, []);


  useEffect(() => {
    setFilteredLinks(links)
  }, [links])

  const { date_format, date_time_format } = useSelector(
    (state) => state.setting
  );

  const [items, setItems] = useState([...mainData]);

  useEffect(() => {
    setItems([...mainData]);
  }, [mainData]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    // console.log(oldIndex, newIndex);
    let newArray = arrayMoveImmutable(items, oldIndex, newIndex);
    setItems(newArray);
    if (changeOrderHandler) {
      let newOrder = {};
      newArray.forEach((val, i) => {
        newOrder[val.id] = i;
      });
      changeOrderHandler(newOrder);
    }
  };

  return (
    <div className="table-responsive">
      <table
        className="table dataTable table-head-custom table-head-bg table-borderless table-vertical-center"
        id="taskTable"
      >
        <thead>
          <tr style={{ whiteSpace: "nowrap" }}>
            {sorting && <th>ORDER</th>}
            {tableHeading.map((heading, index) => (
              <th
                onClick={() => sortingHandler(heading)}
                key={index}
                className={`${currentSort.sortBy == heading
                  ? `sorting_${currentSort.order}`
                  : dontShowSort.includes(heading)
                    ? ""
                    : "sorting"
                  } py-4`}
                style={{
                  width:
                    heading === "answer" || heading === "description"
                      ? "400px"
                      : "",
                }}
              >
                <a className="no_sort">{heading}</a>
              </th>
            ))}
            {filteredLinks && filteredLinks.length > 0 ? (
              <th className="text-left ActionText">Action</th>
            ) : null}
          </tr>
        </thead>

        {sorting && mainData.length > 0 ? (
          <SortableContainer useDragHandle onSortEnd={onSortEnd}>
            {items.map((data, i) => (
              <SortableItem
                key={`item-${i}`}
                index={i}
                data={data}
                tableData={tableData}
                onlyDate={onlyDate}
                links={filteredLinks}
                page={page}
                date_format={date_format}
                date_time_format={date_time_format}
                renderAs={renderAs}
              />
            ))}
          </SortableContainer>
        ) : (
          <tbody>
            {mainData.length > 0 &&
              mainData.map((data) => (
                <tr key={data.id}>
                  {tableData.map((tData, index) => {
                    let value;
                    if (tData == "description") {
                      value = (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: truncate(data[tData]),
                          }}
                        ></p>
                      );
                    } else if (Object.keys(onlyDate).includes(tData)) {
                      if (onlyDate[tData] === "date") {
                        value = (
                          <Moment format={date_format}>{data[tData]}</Moment>
                        );
                      } else if (onlyDate[tData] === "dateTime") {
                        value = (
                          <Moment format={date_time_format}>
                            {data[tData]}
                          </Moment>
                        );
                      }
                    } else if (Object.keys(renderAs).includes(tData)) {
                      value = renderAs[tData](data[tData], data.id, data);
                    } else if (tData == "isActive" || tData == "is_active") {
                      if (
                        data[tData] == "true" ||
                        data[tData] == true ||
                        data[tData] == 1
                      ) {
                        value = (
                          <span className="label label-lg label-light-success label-inline">
                            Activated
                          </span>
                        );
                      } else {
                        value = (
                          <span className="label label-lg label-light-danger label-inline">
                            Deactivated
                          </span>
                        );
                      }
                    } else if (tData == "message") {
                      value = truncate(data[tData]);
                    } else if (tData == "amount") {
                      value = `$${data[tData]}`;
                    } else if (tData == "image") {
                      value = (
                        <img
                          src={`${API.PORT}/${data[tData]}`}
                          alt=""
                          data-fancybox
                          height={50}
                          width={80}
                          style={{ cursor: "pointer" }}
                        />
                      );
                    } else if (tData === "answer") {
                      value = (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: truncate(data[tData]),
                          }}
                        ></p>
                      );
                    }
                    // else if (tData == "type") {
                    //     if(data[tData] == "talent"){
                    //       value = "Job Hunter";
                    //     }else{
                    //       value = data[tData];
                    //     }
                    //   }
                    else {
                      // console.log("tData",tData)
                      value = data[tData];
                    }

                    return (
                      <td key={index} className="py-4">
                        <div className="d-flex align-items-center">
                          <div className="text-dark-75 mb-1  font-size-lg">
                            {value}
                            {/* <span className="False_text">False</span>  
                     <span className="true_text">True</span>   */}

                            {/* {tData === "description" ? (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: truncate(data[tData]),
                              }}
                            ></p>
                          ) : tData === "createdAt" ? (
                            onlyDate ? (
                              <Moment format={date_format}>
                                {data[tData]}
                              </Moment>
                            ) : (
                              <Moment format={date_time_format}>
                                {data[tData]}
                              </Moment>
                            )
                          ) : tData === "isActive" ? (
                            data[tData] == "true" ? (
                              <span className="label label-lg label-light-success label-inline">
                                Activated
                              </span>
                            ) : (
                              <span className="label label-lg label-light-danger label-inline">
                                Deactivated
                              </span>
                            )
                          ) : (
                            data[tData]
                          )} */}
                          </div>
                        </div>
                      </td>
                    );
                  })}

                  <td
                    className="text-left pr-2"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {filteredLinks?.map((link, index) => {
                      let name = link.name;
                      let svg;

                      if (name == "Edit") {
                        svg = <Edit />;
                      } else if (name == "Delete") {
                        svg = <Delete />;
                      } else if (name == "View") {
                        svg = <View />;
                      } else if (
                        name == "Deactivate" &&
                        (data.is_active ?? data.isActive) != "true" &&
                        (data.is_active ?? data.isActive) != true &&
                        (data.is_active ?? data.isActive) != 1
                      ) {
                        svg = <MakeActivate />;
                      } else if (
                        name == "Activate" &&
                        (data.is_active ?? data.isActive) != "false" &&
                        (data.is_active ?? data.isActive) != false &&
                        (data.is_active ?? data.isActive) != 0
                      ) {
                        svg = <MakeDeactivate />;
                      }
                      else if (name == "ChangePassword") {
                        svg = <ChangePassword />;
                      } else if (name == "SendCreds") {
                        svg = <SendCreds />;
                      }
                      else if (name == "SubDocument") {
                        svg = <SubTask />;
                      }
                      else if (name == "category") {
                        svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fillRule="evenodd"><path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" /></svg>
                      } else if (name == "course") {
                        svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                      }

                      if (name == "DownloadCv" && !data.isAvailableForDownload) {
                        return null
                      }

                      if (link.isLink) {
                        { console.log("extra : ", data, data[link.extraKeyName], link); }
                        return (
                          <Link
                            key={index}
                            to={
                              link.extraData
                                ? link.extraKeyName ? { pathname: `${link.to}/${data[link.extraKeyName]}/${data.id}`, page } : { pathname: `${link.to}/${data.id}`, page }
                                : link.extraKeyName ? `${link.to}/${data[link.extraKeyName]}/${data.id}` : `${link.to}/${data.id}`
                            }
                            className="btn btn-icon btn-light btn-hover-primary btn-sm mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            data-container="body"
                            data-boundary="window"
                            title={link.title || name}
                            data-original-title={link.title || name}
                          >
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                              {svg}
                            </span>
                          </Link>
                        );
                      } else {
                        return (
                          <Fragment key={index}>
                            {svg && (
                              <a
                                key={index}
                                className={`btn btn-icon btn-light mr-2 ${name === "Delete"
                                  ? "btn-hover-danger confirmDelete"
                                  : "btn-hover-primary"
                                  }  btn-sm `}
                                data-toggle="tooltip"
                                data-placement="top"
                                data-container="body"
                                data-boundary="window"
                                title={link.title || name}
                                data-original-title={link.title || name}
                                onClick={() =>
                                  link.click(data.id, data, mainData)
                                }
                              >
                                <span

                                  className={`svg-icon svg-icon-md ${name === "Delete"
                                    ? "svg-icon-danger"
                                    : "svg-icon-primary"
                                    }`}
                                >
                                  {svg}
                                </span>
                              </a>
                            )}
                          </Fragment>
                        );
                      }
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        )}
        {mainData.length == 0 && (
          <tbody>
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                {" "}
                {"Record not found"}
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;

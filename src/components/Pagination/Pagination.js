import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.css";
import { HorizontalArrow } from "../../util/Svg";

const Pagination = ({
  page,
  totalDocuments,
  getNewData,
  perPage,
  perPageChangeHandler,
}) => {
  return (
    <div className="row">
      <div className="col-xl-12 px-8">
        <div className="d-flex flex-wrap align-items-center" id="pagination-container" >
          <div className="dataTables_length mr-4">
            <label className="mb-0">
              Rows per page: &nbsp; &nbsp;
              <select
                onChange={perPageChangeHandler}
                className="custom-select custom-select-sm form-control form-control-sm border-0"
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
          </div>

          <div className="dataTables_paginate paging_full_numbers">
            <ReactPaginate
              forcePage={page - 1}
              pageCount={Math.ceil(totalDocuments / perPage)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              previousLabel={""}
              nextLabel={""}
              breakLabel={"..."}
              onPageChange={getNewData}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>

          <div className="d-flex">
            <button className={`${(page < Math.ceil(totalDocuments / perPage) || totalDocuments == 0) ? "pagination_button" : "pagination_button_active"} previous_button mr-3`} disabled={page < Math.ceil(totalDocuments / perPage) || totalDocuments == 0} onClick={() => { getNewData({ selected: page - 2 }) }}>
              <HorizontalArrow dir={"left"} />
              <span className="ml-4">Previous</span>
            </button>
            <button className={`${(page + 1 > Math.ceil(totalDocuments / perPage)) ? "pagination_button" : "pagination_button_active"} next_button`} disabled={page + 1 > Math.ceil(totalDocuments / perPage)} onClick={() => getNewData({ selected: page })}>
              <span className="mr-4">Next</span>
              <HorizontalArrow dir={"right"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

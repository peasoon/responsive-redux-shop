import * as React from "react";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { searchActions } from "../../utils/redux/searchSlice";

interface IPaginationProps {}

const options = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "", label: "all" },
];

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const dispatch = useAppDispatch();
  const { pagesCount, currentPage } = useAppSelector((state) => state.search);


  return (
    <div className="shop-pagination__content mt-[15px]">
      <div className="select-container flex items-center">
        <span>Items on page</span>
        <div className="select w-[80px] ml-auto">
          <Select
            options={options}
            menuPlacement="top"
            placeholder=""
            defaultValue={options[0]}
            onChange={(selected) => {
              dispatch(searchActions.setCurrentPage(1));
              dispatch(searchActions.setItemsPerPage(selected!.value));
            }}
          />
        </div>
      </div>
      <div className="pagination-container mt-[5px]">
        {pagesCount !== 0 && (
          <ReactPaginate
            forcePage={currentPage-1}
            pageCount={pagesCount}
            nextLabel={">>"}
            previousLabel={"<<"}
            onPageChange={({ selected }) => {
              dispatch(searchActions.setCurrentPage(selected + 1));
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;

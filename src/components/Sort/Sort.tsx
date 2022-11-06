import * as React from "react";
import Select from "react-select";
import { useAppDispatch } from "../../utils/redux/hooks";
import { searchActions } from "../../utils/redux/searchSlice";

interface ISortProps {}

const sorByOptions = [
  { value: "title", label: "title" },
  { value: "price", label: "price" },
];
const sorOrderOptions = [
  { value: "asc", label: "ascending" },
  { value: "desc", label: "descending" },
];

const Sort: React.FunctionComponent<ISortProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="shop-sort__content flex items-center justify-between">
      <div className="sort-by">
        <span>Sorting by:</span>
        <Select
          options={sorByOptions}
          onChange={(selected) => {
            dispatch(searchActions.setSortParams([selected!.value,'']));
          }}
        />
      </div>
      <div className="sort-order">
        <span>Order:</span>
        <Select
          options={sorOrderOptions}
          onChange={(selected) => {
            dispatch(searchActions.setSortParams(['',selected!.value]));
          }}
        />
      </div>
    </div>
  );
};

export default Sort;

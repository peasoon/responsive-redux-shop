import * as React from "react";
import debounce from "lodash.debounce";
import { searchActions } from "../../utils/redux/searchSlice";
import { useAppDispatch } from "../../utils/redux/hooks";
import { ReactComponent as CloseIcon } from "./../../assets/close-icon.svg";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const [searchString, setSearchString] = React.useState("");

  const dispatch = useAppDispatch();
  const debouncedSearch = React.useCallback(
    debounce((param: string) => {
      dispatch(searchActions.setSearchParam(param));
    }, 700),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <div className="shop-search__content">
      <label className="block">
        <span>Search: </span>
        <div className="inline-block relative">
          <input
            type="text"
            className="border-[1px] border-stone-900 px-[5px]"
            value={searchString}
            onChange={handleSearch}
          />
          <div className="w-[10px] h-[10px] absolute top-0 right-0 cursor-pointer"
					onClick={()=>{
						setSearchString('')
						dispatch(searchActions.setSearchParam(''))
					}}>
            <CloseIcon />
          </div>
        </div>
      </label>
    </div>
  );
};

export default Search;

import axios from "axios";
import * as React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { setItems } from "../../utils/redux/shopSlice";
import { IShopItemProps } from "./../../components/ShopItem/ShopItem";
import uuid from "react-uuid";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import { searchActions } from "../../utils/redux/searchSlice";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

interface IShopProps {
  
}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, items } = useAppSelector((state) => state.shop);
  const {
    categories,
    currentCategorie,
    searchParam,
    sortParam,
    sortDirection,
  } = useAppSelector((state) => state.search);
  const queryParams = useAppSelector((state) => state.search);
  const queryCategory = currentCategorie ? `&category=${currentCategorie}` : "";
  const search = searchParam ? `&q=${searchParam}` : "";
  const sort = sortParam ? `&_sort=${sortParam}&_order=${sortDirection}` : "";
  const queryString = `?_page=${queryParams.currentPage}&_limit=${queryParams.itemsPerPage}${queryCategory}${search}${sort}`;

  React.useEffect(() => {
    dispatch(searchActions.setCurrentPage(1));
  }, [currentCategorie]);

  React.useEffect(() => {
    dispatch(setItems(queryString));
  }, [queryString]);

  React.useEffect(() => {
    console.log(queryParams);
  }, [queryParams]);
  return (
    <div className="shop">
      <h1 className="text-center">This is a shop page</h1>
      <div className="shop-categories mb-[10px]">
        {categories && <Categories categories={categories} />}
      </div>
      <div className="shop-search mb-[10px]">
        <Search />
      </div>
      <div className="shop-sort mb-[10px]">
        <Sort />
      </div>
      <div className="shop-content grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-[20px] gap-y-[20px]">
        {isLoading && <p className="text-[44px] text-center">Loading...</p>}
        {isError && (
          <p className="text-[44px] text-center text-red-600">Error</p>
        )}
        {items &&
          items.map((item: IShopItemProps) => {
            const key = uuid();
            return <ShopItem {...item} key={key} />;
          })}
      </div>
      <div className="shop-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Shop;

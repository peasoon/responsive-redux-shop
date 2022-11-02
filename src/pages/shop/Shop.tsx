import axios from "axios";
import * as React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { setItems } from "../../utils/redux/shopSlice";
import { IShopItemProps } from "./../../components/ShopItem/ShopItem";
import uuid from "react-uuid";

interface IShopProps {
  children: React.ReactNode;
}

const Shop: React.FunctionComponent<IShopProps> = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, items } = useAppSelector((state) => state.shop);

  React.useEffect(() => {
    dispatch(setItems());
  }, []);

  React.useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className="shop">
      <h1 className="text-center">This is a shop page</h1>
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
    </div>
  );
};

export default Shop;

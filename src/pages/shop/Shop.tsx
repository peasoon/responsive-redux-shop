import * as React from "react";
import ShopItem from "../../components/ShopItem/ShopItem";

interface IShopProps {}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
  return (
    <div className="shop">
      <h1 className="text-center">This is a shop page</h1>
      <div className="shop-content grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-[20px] gap-y-[20px]">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
};

export default Shop;

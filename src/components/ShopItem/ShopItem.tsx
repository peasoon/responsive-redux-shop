import * as React from "react";

interface IShopItemProps {}

const ShopItem: React.FunctionComponent<IShopItemProps> = (props) => {
  return (
    <div className="shop-item border-zinc-900 border-[1px] rounded-[30px] overflow-hidden">
      <div className="shop-item__title flex justify-center">
        <span className="">Title: Hammer</span>
      </div>
      <div className="shop-item__price flex justify-center">
        <span>Price: very mutch</span>
      </div>
      <div className="shop-item__img">
        <img
          src="https://media.istockphoto.com/photos/hammer-with-green-handle-isolated-on-white-picture-id1311275971"
          alt="Item photo"
        />
      </div>
    </div>
  );
};

export default ShopItem;

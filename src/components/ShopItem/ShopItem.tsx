import * as React from "react";

export interface IShopItemProps {
  id: number;
  title: string;
  color: string;
  img: string;
  price: number;
  category: string;
}

const ShopItem: React.FunctionComponent<IShopItemProps> = ({
  title,
  color,
  img,
  price,
  category,
  id,
}) => {
  return (
    <div className="shop-item border-zinc-900 border-[1px] rounded-[30px] overflow-hidden">
      <div className="shop-item__title flex justify-center">
        <span className="">Title: {title}</span>
      </div>
      <div className="shop-item__color flex justify-center">
        <span className="">Color: {color}</span>
      </div>
      <div className="shop-item__price flex justify-center">
        <span>Price: {price}</span>
      </div>
      <div className="shop-item__category flex justify-center">
        <span>Category: {category}</span>
      </div>
      <div className="shop-item__img h-[300px]">
        <img src={img} alt="Item photo" className='w-full h-full object-contain'/>
      </div>
    </div>
  );
};

export default ShopItem;

import * as React from "react";
import { cartActions } from "../../utils/redux/cartSlice";
import { useAppSelector, useAppDispatch } from "../../utils/redux/hooks";
import { IShopItemProps } from "./../../components/ShopItem/ShopItem";

interface ICartItemProps extends IShopItemProps {
  quantity: number;
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({
  id,
  title,
  color,
  category,
  price,
  img,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const storedQuty: number = useAppSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  )!.quantity;

  return (
    <div className="cart-content__item flex flex-col h-[100%] border-[1px] border-solid border-slate-800 rounded-[10px] py-[5px] px-[10px]">
      <div className="title">Title: {title}</div>
      <div className="color">Color: {color}</div>
      <div className="category">Category: {category}</div>
      <div className="price">Price: {price}</div>
      <div className="image grow">
        <img src={img} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div className="quantity flex items-center space-x-[10px] mt-[10px]">
          <button
            className="border-solid border-[1px] border-slate-900 rounded-[10px] w-[30px] h-[30px] text-[24px] flex items-center justify-center"
						disabled = {(storedQuty === 1) ? true : false}
            onClick={() => {
              dispatch(
                cartActions.changeItemQty({ id, newQty: storedQuty - 1 })
              );
            }}
          >
            -
          </button>
          <input
            type="text"
            defaultValue={storedQuty}
            disabled
            className="w-[50px] h-[30px] border-solid border-[1px] border-slate-400 rounded-[10px] text-center"
          />
          <button
            className="border-solid border-[1px] border-slate-900 rounded-[10px] w-[30px] h-[30px] text-[24px] flex items-center justify-center"
            onClick={() => {
              dispatch(
                cartActions.changeItemQty({ id, newQty: storedQuty + 1 })
              );
            }}
          >
            +
          </button>
        </div>
        <button className="border-solid border-[1px] border-slate-900 rounded-[10px] py-[5px] px-[10px] text-[14px] flex items-center justify-center mt-[10px]" onClick={()=>{
					dispatch(cartActions.removeItem(id))
				}}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartItem);

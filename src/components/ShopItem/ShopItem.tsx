import * as React from "react";
import { ReactComponent as HeartIcon } from "./../../assets/heart-icon.svg";
import { ReactComponent as PlusIcon } from "./../../assets/plus.svg";
import { ReactComponent as MinusIcon } from "./../../assets/minus.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { cartActions } from "../../utils/redux/cartSlice";
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
  const [isLiked, setIsLiked] = React.useState(false);
  const [isAtCart, setIsAtCart] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
	const cartItems = useAppSelector((state) => state.cart.items)


	React.useEffect(()=>{
		if(cartItems.find(item => item.id === id)) {
			setIsAtCart(true)
		} else {
			setIsAtCart(false)
		}
	},[cartItems])

  return (
    <div
      className="shop-item border-zinc-900 border-[1px] rounded-[30px] overflow-hidden relative"
      onClick={() => {
        navigate(`/shop/${id}`);
      }}
    >
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
        <img
          src={img}
          alt="Item photo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="shop-item__actions absolute bottom-[10px] right-[10px] flex items-center">
        <button
          className="border-[1px] border-solid border-[tomato] mr-[5px] px-3 py-2 bg-red-100"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            setIsLiked((prev) => !prev);
          }}
        >
          <div
            className={
              "w-[20px] h-[20px] cursor-pointer " +
              (isLiked ? "text-lime-600" : "text-slate-400")
            }
          >
            <HeartIcon />
          </div>
        </button>
        <button
          className="border-[1px] border-solid border-[tomato] px-3 py-2 bg-red-100"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            isAtCart
              ? dispatch(cartActions.removeFromCart(id))
              : dispatch(
                  cartActions.addToCart({title, color, img, price, category, id, quantity:1})
                );
          }}
        >
          <div className="w-[20px] h-[20px] text-slate-400">
            {isAtCart ? <MinusIcon /> : <PlusIcon />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ShopItem;

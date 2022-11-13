import * as React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useAppSelector } from "../../utils/redux/hooks";
import uuid from "react-uuid";
interface ICartProps {}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <div className="cart">
      <h1 className="text-center">This is a cart page</h1>
      <h2>
        Total: {cartItems.reduce((acc, item) => acc + item.quantity, 0)} units
        for {cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0)} money
      </h2>
      <div className="cart-content grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px]">
        {cartItems &&
          cartItems.map((item) => <CartItem {...item} key={uuid()} />)}
      </div>
    </div>
  );
};

export default Cart;

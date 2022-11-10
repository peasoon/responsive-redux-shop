import axios from "axios";
import * as React from "react";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { cartActions } from "../../utils/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";

interface IItemPageProps {}

const fetchItemData = async (id: number) => {
  const data = await axios.get(`http://localhost:3001/items/${id}`);
  return data.data;
};

export const itemDataLoader = async ({ params }: any) => {
  const id = params.id;
  return { itemData: await fetchItemData(id) };
};

const ItemPage: React.FunctionComponent<IItemPageProps> = (props) => {
  const { itemData }: any = useLoaderData();
  const [isAtCart, setIsAtCart] = React.useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  React.useEffect(() => {
    if (cartItems.find((item) => item.id === itemData.id)) {
      setIsAtCart(true);
    } else {
      setIsAtCart(false);
    }
  }, [cartItems]);
  return (
    <div className="item-page">
      <span className="mx-auto block w-[max-content]">
        This is an item page!!!
      </span>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={itemData}>
          <div className="item-page__content max-w-[600px] mx-auto">
            <div className="title">Title: {itemData.title}</div>
            <div className="color">Color: {itemData.color}</div>
            <div className="image">
              <img src={itemData.img} alt="" />
            </div>
            <div className="price">Price: {itemData.price}</div>
            <button
              className="border-solid border-[1px] border-red-300 rounded-[10px] px-[10px] py-[5px]"
              onClick={() => {
                isAtCart
                  ? dispatch(cartActions.removeFromCart(itemData.id))
                  : dispatch(
                      cartActions.addToCart({ ...itemData, quantity: 1 })
                    );
              }}
            >
              {isAtCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </Await>
      </Suspense>
    </div>
  );
};

export default ItemPage;

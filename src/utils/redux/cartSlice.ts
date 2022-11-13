import { IShopItemProps } from "./../../components/ShopItem/ShopItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "./hooks";

interface ICartState {
  items: (IShopItemProps & { quantity: number })[];
  itemsAtCart: number;
}

const initialState: ICartState = {
  items: [],
  itemsAtCart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      { payload }: PayloadAction<IShopItemProps & { quantity: number }>
    ) => {
      state.items = [...state.items, payload];
      state.itemsAtCart = state.itemsAtCart + payload.quantity;
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      const newItems = state.items.filter((item) => item.id !== payload);
      state.items.forEach((item) => {
        if (item.id === payload) {
          state.itemsAtCart = state.itemsAtCart - item.quantity;
        }
      });
      state.items = newItems;
    },
    changeItemQty: (
      state,
      { payload }: PayloadAction<{ id: number; newQty: number }>
    ) => {
      console.log("change item qty--->", payload);
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: payload.newQty };
        } else {
          return item;
        }
      });
      state.itemsAtCart = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.itemsAtCart = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

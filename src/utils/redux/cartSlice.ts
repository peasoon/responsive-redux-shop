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

//const dispatch = useAppDispatch();

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
			const newItems = state.items.filter(item=>item.id !== payload)
			state.items.forEach(item => {
				if(item.id === payload) {
					state.itemsAtCart = state.itemsAtCart - item.quantity
				}
			})
			state.items = newItems
		},
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

import { cartReducer } from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";
import { shopReducer } from "./shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

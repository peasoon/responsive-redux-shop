import { IShopItemProps } from "./../../components/ShopItem/ShopItem";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialStateType {
  isLoading: boolean;
  isError: boolean;
  items: IShopItemProps[];
}

const initialState: InitialStateType = {
  isLoading: true,
  isError: false,
  items: [],
};

export const setItems = createAsyncThunk("shop/setItems", async () => {
  const data = await axios.get("http://localhost:3001/items");
  if (data.statusText === "OK") {
    const items = await data.data;
    return items;
  } else {
    throw new Error("Error " + data.status);
  }
});

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setItems.fulfilled,
        (state, { payload }: PayloadAction<IShopItemProps[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.items = payload;
        }
      )
      .addCase(setItems.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(setItems.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export const shopReducer = shopSlice.reducer;
export const shopActions = shopSlice.actions;

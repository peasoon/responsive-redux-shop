import { IShopItemProps } from "./../../components/ShopItem/ShopItem";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialStateType {
  isLoading: boolean;
  isError: boolean;
  items: IShopItemProps[];
}

export interface IPayload {
  items: IShopItemProps[];
  pagesCount: number;
  categories: string[];
}

const initialState: InitialStateType = {
  isLoading: true,
  isError: false,
  items: [],
};

const shopApi = axios.create({
  baseURL: "http://localhost:3001/items",
});

export const setItems = createAsyncThunk(
  "shop/setItems",
  async (query: string) => {
    const data = await shopApi.get(query);
    let pagesCount = 0;
    if (data.headers.link) {
      const itemsCnt = await (
        await axios.get("http://localhost:3001/additional")
      ).data;
      pagesCount = itemsCnt.itemsCount;
    }
    if (data.statusText === "OK") {
      const items = await data.data;
			const wholeItems = await (
        await axios.get("http://localhost:3001/items")
      ).data;
      const categories = wholeItems.map((item: IShopItemProps) => item.category);
      return { items, pagesCount, categories };
    } else {
      throw new Error("Error " + data.status);
    }
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setItems.fulfilled,
        (state, { payload }: PayloadAction<IPayload>) => {
          state.isLoading = false;
          state.isError = false;
          state.items = payload.items;
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

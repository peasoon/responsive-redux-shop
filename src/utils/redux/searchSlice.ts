import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setItems } from "./shopSlice";
import { IPayload } from './shopSlice'

interface IinitialState {
  itemsPerPage: string;
  category: string;
  filterParam: string;
	pagesCount: number;
	currentPage: number
}

const initialState: IinitialState = {
  itemsPerPage: "3",
  category: "",
  filterParam: "",
	pagesCount: 0,
	currentPage: 1
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setItemsPerPage: (state, {payload}:PayloadAction<string>) => {
			state.itemsPerPage = payload;
		},
		setPagesCount: (state,{payload}:PayloadAction<number>) => {
			state.pagesCount = payload
		},
		setCurrentPage: (state,{payload}:PayloadAction<number>) => {
			state.currentPage = payload
		}
  },
	extraReducers: (builder) => {
		builder.addCase(setItems.fulfilled,(state,{payload}:PayloadAction<IPayload>)=>{
			let pages = Math.ceil(Number(payload.pagesCount) / Number(state.itemsPerPage))
			if(!Number.isInteger(pages)) {
				pages = 0
			}
			state.pagesCount = pages;
		})
	}
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;

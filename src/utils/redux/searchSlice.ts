import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setItems } from "./shopSlice";
import { IPayload } from './shopSlice'

interface IinitialState {
  itemsPerPage: string;
  categories: string[];
	currentCategorie: string;
  searchParam: string;
	pagesCount: number;
	currentPage: number;
	sortParam: string;
	sortDirection: string
}

const initialState: IinitialState = {
  itemsPerPage: "3",
  categories: [],
	currentCategorie: '',
  searchParam: "",
	pagesCount: 0,
	currentPage: 1,
	sortParam: '',
	sortDirection: 'asc'
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
		},
		setCurrentCategorie: (state,{payload}:PayloadAction<string>) => {
			state.currentCategorie = payload
		},
		setSearchParam: (state,{payload}:PayloadAction<string>) => {
			state.searchParam = payload
		},
		setSortParams: (state,{payload}:PayloadAction<string[]>) => {
			payload[0] && (state.sortParam = payload[0]);
			payload[1] && (state.sortDirection = payload[1]);
		},
  },
	extraReducers: (builder) => {
		builder.addCase(setItems.fulfilled,(state,{payload}:PayloadAction<IPayload>)=>{
			let pages = Math.ceil(Number(payload.pagesCount) / Number(state.itemsPerPage))
			if(!Number.isInteger(pages)) {
				pages = 0
			}
			state.pagesCount = pages;
			state.categories = [...new Set(payload.categories)]
		})
	}
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;

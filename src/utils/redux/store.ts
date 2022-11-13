import { cartReducer } from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";
import { shopReducer } from "./shopSlice";

import { createStore, combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  search: searchReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // {
  //   shop: shopReducer,
  //   search: searchReducer,
  //   cart: cartReducer,
  // },
});

// export const store = createStore(persistedReducer)
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

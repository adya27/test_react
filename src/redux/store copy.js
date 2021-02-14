import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/auth-reducers";
import { passwords, modal } from "./auth/card-reducers";

const rootReducer = combineReducers({
  auth,
  passwords,
  modal,
});

const persistConfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

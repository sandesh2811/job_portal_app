import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserLoginData from "./Features/userLoginState";
import SelectedFilters from "./Features/selectedFilters";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  loginDataReducer: UserLoginData.reducer,
  selectedFilters: SelectedFilters.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const GlobalStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof GlobalStore.getState>;

export type AppDispatch = typeof GlobalStore.dispatch;

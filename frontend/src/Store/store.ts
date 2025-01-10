import { configureStore } from "@reduxjs/toolkit";
import UserLoginData from "./Features/userLoginState";
import SelectedFilters from "./Features/selectedFilters";

export const GlobalStore = configureStore({
  reducer: {
    loginDataReducer: UserLoginData.reducer,
    selectedFilters: SelectedFilters.reducer,
  },
});

export type RootState = ReturnType<typeof GlobalStore.getState>;

export type AppDispatch = typeof GlobalStore.dispatch;

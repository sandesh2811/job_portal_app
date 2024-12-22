import { configureStore } from "@reduxjs/toolkit";
import UserLoginData from "./Features/userLoginState";

export const GlobalStore = configureStore({
  reducer: {
    loginDataReducer: UserLoginData.reducer,
  },
});

export type RootState = ReturnType<typeof GlobalStore.getState>;

export type AppDispatch = typeof GlobalStore.dispatch;

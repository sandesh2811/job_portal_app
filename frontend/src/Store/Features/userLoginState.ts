import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LoginState = {
  loginData: {
    userName: "",
    userId: "",
    role: "",
  },
};

const UserLoginData = createSlice({
  name: "LoginData",
  initialState,
  reducers: {
    getLoginData: (state, action: PayloadAction<LoginDataType>) => {
      const { userName, userId, role } = action.payload;

      state.loginData = {
        userName,
        userId,
        role,
      };
    },
  },
});

export const { getLoginData } = UserLoginData.actions;

export default UserLoginData;

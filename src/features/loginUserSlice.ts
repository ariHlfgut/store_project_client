import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

const initialState: AuthState = {
  userLogin: null,
};

export const loginUserSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userIn: (state, action) => {
      state.userLogin = action.payload;
    },
    userOutput: (state, action) => {
      state.userLogin = null;
    },
  },
});

export const { userIn, userOutput } = loginUserSlice.actions;

export default loginUserSlice.reducer;

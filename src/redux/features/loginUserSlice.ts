import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  full_name: string;
  email: string;
  password: string;
}

interface AuthState {
  userLogin: User | null;
}

const initialState: AuthState = {
  userLogin: null,
};

export const loginUserSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userIn: (state, action: PayloadAction<User>) => {
      console.log(action.payload);

      const user: User = {
        _id: action.payload._id,
        full_name: action.payload.full_name,
        email: action.payload.email,
        password: action.payload.password,
      };

      state.userLogin = user;
    },
    userOutput: (state) => {
      state.userLogin = null;
    },
  },
});

export const { userIn, userOutput } = loginUserSlice.actions;

export default loginUserSlice.reducer;
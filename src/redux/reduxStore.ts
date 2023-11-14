import { configureStore } from "@reduxjs/toolkit";
import loginUserSlice from "./features/loginUserSlice";
export const store = configureStore({
  reducer: {
    loginUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

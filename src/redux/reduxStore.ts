import { configureStore } from "@reduxjs/toolkit";
import loginUserSlice from "./features/loginUserSlice";
import selectedProductsReducer from "../redux/features/selectedProductsSlice";

export const store = configureStore({
  reducer: {
    loginUserSlice,
    selectedProducts: selectedProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

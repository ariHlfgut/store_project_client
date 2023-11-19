import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectedProductsState {
  selectedProducts: string[];
}

const initialState: SelectedProductsState = {
  selectedProducts: [],
};

export const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState,
  reducers: {
    addSelectedProduct: (state, action: PayloadAction<string>) => {
      state.selectedProducts.push(action.payload);
    },
    clearSelectedProducts: (state) => {
      state.selectedProducts = [];
    },
  },
});

export const { addSelectedProduct, clearSelectedProducts } =
  selectedProductsSlice.actions;

export default selectedProductsSlice.reducer;

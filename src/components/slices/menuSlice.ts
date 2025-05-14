import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../Order.ts";

interface MenuState {
  activeCategory: string | null;
  isCatalogOpen: boolean;
  selectedProducts: Product[];
}

const initialState: MenuState = {
  activeCategory: null,
  isCatalogOpen: true,
  selectedProducts: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleCatalog(state) {
      state.isCatalogOpen = !state.isCatalogOpen;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory =
        state.activeCategory === action.payload ? null : action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.selectedProducts.push(action.payload);
    },
  },
});

export const { toggleCatalog, setActiveCategory, addProduct } =
  menuSlice.actions;
export default menuSlice.reducer;

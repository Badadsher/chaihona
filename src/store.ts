import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./components/slices/menuSlice";
const store = configureStore({
  reducer: {
    menuSlice: menuSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

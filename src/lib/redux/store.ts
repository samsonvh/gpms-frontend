import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import productFormSectionSlice from "./features/productFormSectionSlice";
import materialSlice from "./features/materialSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categorySlice,
      productFormSection: productFormSectionSlice,
      materials: materialSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

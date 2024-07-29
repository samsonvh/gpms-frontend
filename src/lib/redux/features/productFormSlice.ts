import { createSlice, current } from "@reduxjs/toolkit";

const productFormInitialState = {
  data: null,
};

const productFormSlice = createSlice({
  name: "productForm",
  initialState: productFormInitialState,
  reducers: {
    setForm(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setForm } = productFormSlice.actions;

export default productFormSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

const productFormSectionInitialState = {
  current: 0,
  data: [{ pos: 0, name: "Definition" },{ pos: 1, name: "Specification" },{ pos: 2, name: "Production process" },],
};

const productFormSectionSlice = createSlice({
  name: "productFormSection",
  initialState: productFormSectionInitialState,
  reducers: {
    toPreviousSection(state, action) {
      if (state.current > 0) {
        state.current = state.current - 1;
      }
    },
    toNextSection(state, action) {
      if (state.current < state.data.length - 1) {
        state.current = state.current + 1;
      }
    },
  },
});

export const { toPreviousSection, toNextSection } =
  productFormSectionSlice.actions;

export default productFormSectionSlice.reducer;

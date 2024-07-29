import { getAllCategories } from "@/networks/apis/productAPIs";
import { Category } from "@/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: { data: Category[]; status: string } = {
  data: [],
  status: "idle",
};

export const getCategoriesAsync = createAsyncThunk(
  "categories/getList",
  async () => {
    return await getAllCategories();
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.status = "idle";
      console.log(action.payload);
      state.data = action.payload;
    });
    builder.addCase(getCategoriesAsync.rejected, (state) => {
      state.status = "idle";
    });
  },
});

const { actions, reducer } = categorySlice;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
        id: 1,
        name: "Shirt"
    },
    {
        id: 2,
        name: "Trouser"
    },
    {
        id: 3,
        name: "T-Shirt"
    },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
  },
});

export default categorySlice.reducer;

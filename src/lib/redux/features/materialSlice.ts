import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Shirt",
    },
    {
      id: 2,
      name: "Trouser",
    },
    {
      id: 3,
      name: "T-Shirt",
    },
  ],
};

const materialSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {},
});

export default materialSlice.reducer;

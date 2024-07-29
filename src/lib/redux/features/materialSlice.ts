import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      code: "MATERIAL1",
      name: "MATERIAL1",
      consumptionUnit: "yrd",
      sizeWidthUnit: "cm",
      colorCode: "#FFF",
      colorName: "WHITE",
      description: "testing",
    },
    {
      id: 2,
      code: "MATERIAL2",
      name: "MATERIAL2",
      consumptionUnit: "yrd",
      sizeWidthUnit: "cm",
      colorCode: "#FFF",
      colorName: "WHITE",
      description: "testing",
    },
    {
      id: 3,
      code: "MATERIAL3",
      name: "MATERIAL3",
      consumptionUnit: "yrd",
      sizeWidthUnit: "cm",
      colorCode: "#FFF",
      colorName: "WHITE",
      description: "testing",
    },
  ],
};

const materialSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {},
});

export default materialSlice.reducer;

export type SemiFinishedProduct = {
  code: string;
  name: string;
  quantity: number;
  description: string;
};

export type Material = {
  code: string;
  name: string;
  consumptionUnit: string;
  sizeWidthUnit: string;
  colorCode: string;
  colorName: string;
  description: string;
};

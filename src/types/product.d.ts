type SemiFinishedProduct = {
  code: string;
  name: string;
  quantity: number;
  description: string;
};

type Material = {
  code: string;
  name: string;
  consumptionUnit: string;
  sizeWidthUnit: string;
  colorCode: string;
  colorName: string;
  description: string;
};

type ProductProps = {
  id: string;
  code: string;
  name: string;
  imageURLs: string[];
  sizes: string[];
  colors: string[];
  createdDate: string;
  status: string;
};

type ProductsListProps = {
  data: ProductProps[];
  totalItem: number;
  pageIndex: number;
  pageCount: number;
  pageSize: number;
};

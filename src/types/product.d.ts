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
  imageURLs: string[] | null;
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

type CategoryProps = {
  id: string;
  name: string;
};

type SemiFinishedProductsProps = {
  id: string;
  name: string;
  quantity: number;
  description: string | null;
  code: string;
};

type MeasurementsProps = {
  id: string;
  name: string;
  measure: number;
  unit: string;
};

type MaterialProps = {
  id: string;
  code: string;
  name: string;
  consumptionUnit: string;
  sizeWidthUnit: string;
  colorCode: string;
  colorName: string;
  description: string | null;
};

type BillOfMaterialsProps = {
  id: string;
  sizeWidth: number;
  consumption: number;
  description: string | null;
  material: MaterialProps;
};

type QualityStandardsProps = {
  id: string;
  name: string;
  description: string | null;
  imageURL: string[] | null;
};

type SpecificationsProps = {
  id: string;
  size: string;
  color: string;
  inventoryQuantity: number;
  productCode: string;
  productName: string;
  measurements: MeasurementsProps[];
  billOfMaterials: BillOfMaterialsProps[];
  qualityStandards: QualityStandardsProps[];
};

type ProductionProcessStepIOsProps = {
  id: string;
  quantity: number | null;
  consumption: number | null;
  isProduct: boolean;
  type: string;
  semiFinishedProductCode: string | null;
  semiFinishedProductName: string | null;
  materialCode: string | null;
  materialName: string | null;
};

type ProductionProcessStepsProps = {
  id: string;
  code: string;
  name: string;
  orderNumber: number;
  standardTime: number;
  outputPerHour: number;
  description: string | null;
  productionProcessStepIOs: ProductionProcessStepIOsProps[];
};

type ProcessesProps = {
  id: string;
  code: string;
  name: string;
  orderNumber: number;
  description: string | null;
  productionProcessSteps: ProductionProcessStepsProps[];
};

type ProductDetailProps = {
  id: string;
  code: string;
  name: string;
  description: string | null;
  sizes: string[];
  colors: string[];
  imageURLs: string[] | null;
  status: string;
  createdDate: string;
  category: CategoryProps;
  creatorName: string;
  reviewerName: string | null;
  semiFinishedProducts: SemiFinishedProductsProps[];
  specifications: SpecificationsProps[];
  processes: ProcessesProps[];
};

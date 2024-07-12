export type NewProductRequest = {
  code: string;
  name: string;
  size: string;
  color: string;
  images: File[];
  description?: string;
  specifications: {
    size: string;
    color: string;
    measurements: {
      name: string;
      measurement: number;
      unit: string;
    }[];
    billOfMaterials: {
      materialCode: string;
      sizeWidth: number;
      consumption: number;
      description?: string;
    }[];
    qualityStandards: {
      materialCode?: string;
      name: string;
      color?: string;
      image?: File;
      sizeWidth?: number;
      description?: string;
      type: number;
    }[];
  }[];
  semiFinishedProducts: {
    code: string;
    name: string;
    quantity: number;
    description?: string;
  }[];
  stages: {
    name: string;
    description: string;
    group: string;
    processes: {
      code: string;
      name: string;
      description: string;
      order: number;
      steps: {
        code: string;
        name: string;
        description: string;
        order: number;
        standardTime: number;
        outputPerHour: number;
      }[];
      inputsOutputs: {
        materialCode?: string;
        semiFinishedProductCode?: string;
        quantity: number;
        isProduct: boolean;
        type: boolean;
      }[];
    }[];
  }[];
};

export type NewSemiFinishedProduct = {
  code: string,
  name: string,
  quantity: number,
  description: string
}
 
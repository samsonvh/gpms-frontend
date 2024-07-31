"use client";
import ProductDetail from "@/components/pages/products/detail";
import { useQuery } from "@tanstack/react-query";
import { SERVER_URI } from "../../../../../utils/uri";
import { useState } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { isLoading, isError, data, error } = useQuery<any>({
    queryKey: ["product-detail"],
    queryFn: () =>
      fetch(`${SERVER_URI}/products/${params.productId}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const product = data.data;
  return <ProductDetail product={product} />;
}

const PRODUCT = {
  id: "c73566e8-8ffb-4904-9b44-08dcacc1ee83",
  code: "Product024",
  name: "Quần short hồng",
  description: "Quần short màu cam dành cho mùa hè",
  sizes: ["S", "M", "L"],
  colors: ["hồng", "xanh"],
  imageURLs: [
    "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FImages%2Fqu%E1%BA%A7n%20short%20h%E1%BB%93ng%202.jpg?generation=1721922812391873&alt=media",
    "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FImages%2Fqu%E1%BA%A7n%20short%20h%E1%BB%93ng%203.jpg?generation=1721922813137264&alt=media",
    "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FImages%2FQu%E1%BA%A7n%20short%20h%E1%BB%93ng%204.jpg?generation=1721922814190111&alt=media",
  ],
  createdDate: "2024-07-23T10:11:32.8553316",
  status: "Pending",
  category: {
    id: "fc08fac3-298a-4bd2-b8ff-08dcaa82bd66",
    name: "Quần",
  },
  creatorName: "Khang xau quac",
  reviewerName: "Khang xau quac",
  semiFinishedProducts: [
    {
      id: "abad87fd-54b9-4a05-72de-08dcacc1ee8e",
      code: "SemiFinishProduct020",
      name: "Phần thân short",
      quantity: 15,
      description: "Phần thân quần short màu hồng",
    },
  ],
  specifications: [
    {
      id: "29f5fed0-6f2c-4ef6-a830-08dcacc1ee9a",
      size: "L",
      color: "hồng",
      inventoryQuantity: 0,
      productCode: "Product024",
      productName: "Quần short hồng",
      measurements: [
        {
          id: "964cf11f-fe0e-4960-4ff9-08dcacc1eea0",
          name: "Chiều dài short",
          measure: 45,
          unit: "cm",
        },
      ],
      billOfMaterials: [
        {
          id: "eec4c8c6-85c6-4134-7e10-08dcacc1eea3",
          sizeWidth: 3,
          consumption: 5,
          description: "Vải cotton cho short",
          material: {
            id: "1991a768-dce6-4c7a-1f91-08dcacc1ee93",
            code: "Material020",
            name: "Vải cotton",
            consumptionUnit: "m",
            sizeWidthUnit: "cm",
            colorCode: "CL006",
            colorName: "hồng",
            description: "Vải cotton màu hồng",
          },
        },
      ],
      qualityStandards: [
        {
          id: "ce9d81be-a4b6-4193-f7f0-08dcacc1eea5",
          name: "Độ bền màu",
          description: "Vải không phai màu sau nhiều lần giặt",
          imageURL: [
            "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FProductSpecification%2F29f5fed0-6f2c-4ef6-a830-08dcacc1ee9a%2FQualityStandard%2Fce9d81be-a4b6-4193-f7f0-08dcacc1eea5%2FImages%2Fqu%E1%BA%A7n%20short%20h%E1%BB%93ng%202.jpg?generation=1721922843965236&alt=media",
            "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FProductSpecification%2F29f5fed0-6f2c-4ef6-a830-08dcacc1ee9a%2FQualityStandard%2Fce9d81be-a4b6-4193-f7f0-08dcacc1eea5%2FImages%2Fqu%E1%BA%A7n%20short%20h%E1%BB%93ng%203.jpg?generation=1721922844562359&alt=media",
            "https://storage.googleapis.com/download/storage/v1/b/gpms-9bf3e.appspot.com/o/Product%2Fc73566e8-8ffb-4904-9b44-08dcacc1ee83%2FProductSpecification%2F29f5fed0-6f2c-4ef6-a830-08dcacc1ee9a%2FQualityStandard%2Fce9d81be-a4b6-4193-f7f0-08dcacc1eea5%2FImages%2FQu%E1%BA%A7n%20short%20h%E1%BB%93ng%204.jpg?generation=1721922845290673&alt=media",
          ],
        },
      ],
    },
  ],
  processes: [
    {
      id: "8ff99d77-c237-4124-8a78-08dcacc1eeaa",
      code: "Process020",
      name: "May short hồng",
      orderNumber: 1,
      description: "Quy trình may quần short màu hồng",
      productionProcessSteps: [
        {
          id: "54489095-9a5b-4a3a-5be4-08dcacc1eeb0",
          code: "Step029",
          name: "Cắt vải",
          orderNumber: 1,
          standardTime: 1,
          outputPerHour: 20,
          description: "Cắt vải theo kích thước",
          productionProcessStepIOs: [
            {
              id: "55ce398b-e674-478d-6495-08dcacc1eeb8",
              quantity: 15,
              consumption: null,
              isProduct: false,
              type: "Input",
              semiFinishedProductCode: "SemiFinishProduct020",
              semiFinishedProductName: "Phần thân short",
              materialCode: null,
              materialName: null,
            },
            {
              id: "c31e410b-5e2d-4eb5-6496-08dcacc1eeb8",
              quantity: null,
              consumption: 5,
              isProduct: false,
              type: "Output",
              semiFinishedProductCode: null,
              semiFinishedProductName: null,
              materialCode: "Material020",
              materialName: "Vải cotton",
            },
          ],
        },
        {
          id: "1d86983e-5c2c-4411-5be5-08dcacc1eeb0",
          code: "Step030",
          name: "May phần thần",
          orderNumber: 2,
          standardTime: 2,
          outputPerHour: 10,
          description: "May phần thân của quần short",
          productionProcessStepIOs: [
            {
              id: "d8e66b85-1d9c-4af8-6497-08dcacc1eeb8",
              quantity: 15,
              consumption: null,
              isProduct: false,
              type: "Output",
              semiFinishedProductCode: "SemiFinishProduct020",
              semiFinishedProductName: "Phần thân short",
              materialCode: null,
              materialName: null,
            },
            {
              id: "a3e70526-70d6-4087-6498-08dcacc1eeb8",
              quantity: null,
              consumption: 5,
              isProduct: false,
              type: "Input",
              semiFinishedProductCode: null,
              semiFinishedProductName: null,
              materialCode: "Material020",
              materialName: "Vải cotton",
            },
          ],
        },
      ],
    },
  ],
};

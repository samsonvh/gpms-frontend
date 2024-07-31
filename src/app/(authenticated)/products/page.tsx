"use client";
import ProductsList from "@/components/pages/products/lists";
import { SERVER_URI } from "../../../../utils/uri";
import { useQuery } from "@tanstack/react-query";
const ProductsListPage = () => {
  const { isLoading, isError, data, error } = useQuery<any>({
    queryKey: ["products"],
    queryFn: () => fetch(`${SERVER_URI}/products`).then((res) => res.json()),
  });
  const products = data?.data;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return data === undefined ? <></> : <ProductsList products={products} />;
};

export default ProductsListPage;

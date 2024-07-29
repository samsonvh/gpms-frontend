"use client";
import ProductsList from "@/components/pages/products/lists";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URI } from "../../../../utils/uri";
const ProductListPage = () => {
  const [products, setProducts] = useState<ProductsListProps | null>(null);
  // {data:[],pageCount:0,pageIndex:0,pageSize:0,totalItem:0}
  const accessToken = "asjdvbdsijvbiwvbwiebviwbvijdbvjdsbvkjasdbvbkjbajdvbl";
  useEffect(() => {
    axios
      .get(`${SERVER_URI}/products`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setProducts(res.data.data);
      });
  }, []);
  return (
    <>
      <ProductsList products={products} />
    </>
  );
};

export default ProductListPage;

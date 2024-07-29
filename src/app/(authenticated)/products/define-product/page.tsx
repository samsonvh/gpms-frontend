import DefineProductForm from "@/components/pages/products/form";
import ProductForm from "@/components/pages/products/form2";
import StoreProvider from "@/components/shared/providers/StoreProvider";
import React from "react";

const DefineProductPage = () => {
  return (
    <StoreProvider>
      <div className="p-8 xl:p-16">
        <ProductForm />
      </div>
    </StoreProvider>
  );
};

export default DefineProductPage;

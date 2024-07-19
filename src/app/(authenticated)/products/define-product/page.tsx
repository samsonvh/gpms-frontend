import DefineProductForm from "@/components/pages/products/form";
import StoreProvider from "@/components/shared/providers/StoreProvider";
import React from "react";

const DefineProductPage = () => {
  return (
    <StoreProvider>
      <div>
        <DefineProductForm />
      </div>
    </StoreProvider>
  );
};

export default DefineProductPage;

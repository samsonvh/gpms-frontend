import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  toNextSection,
  toPreviousSection,
} from "@/lib/redux/features/productFormSectionSlice";
import React from "react";

const ProductFormHeader = () => {
  const productFormSection = useAppSelector(
    (state) => state.productFormSection
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{productFormSection.data[productFormSection.current].name}</h1>
      <Button
        type="button"
        className={productFormSection.current > 0 ? "" : "invisible"}
        onClick={(event) => dispatch(toPreviousSection("pre"))}
      >
        Previous
      </Button>
      <Button
        type="button"
        className={
          productFormSection.current == productFormSection.data.length - 1
            ? "invisible"
            : ""
        }
        onClick={(event) => dispatch(toNextSection("next"))}
      >
        Next
      </Button>
    </div>
  );
};

export default ProductFormHeader;

import { useAppSelector } from '@/lib/hook';
import React from 'react'

const ProductFormSpecification = () => {
  const productFormSection = useAppSelector(
    (state) => state.productFormSection
  );

  return (
    <div className={productFormSection.current == 1 ? "" : "h-0 overflow-hidden"}>ProductFormSpecification</div>
  )
}

export default ProductFormSpecification
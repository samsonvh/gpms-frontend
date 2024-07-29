import { useAppSelector } from '@/lib/hook';
import React from 'react'

const ProductFormProductionProcess = () => {
  const productFormSection = useAppSelector(
    (state) => state.productFormSection
  );

  return (
    <div className={productFormSection.current == 2 ? "" : "h-0 overflow-hidden"}>ProductFormProductionProcess</div>
  )
}

export default ProductFormProductionProcess
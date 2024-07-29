import { useAppSelector } from "@/lib/hook";
import { UseFormReturn } from "react-hook-form";
import InputSection from "./sections/leftSection";
import RightSection from "./sections/rightSection";

const ProductFormDefinition = ({ form }: { form: UseFormReturn<any> }) => {
  const productFormSection = useAppSelector(
    (state) => state.productFormSection
  );

  return (
    <div
      id="product-definition"
      className={productFormSection.current == 0 ? "" : "h-0 overflow-hidden"}
    >
      <div className="grid grid-cols-4 gap-x-8">
        <div className="col-span-1">
          <InputSection form={form} />
        </div>
        <div className="col-span-3">
          <RightSection form={form} />
        </div>
      </div>
    </div>
  );
};

export default ProductFormDefinition;

import { UseFormReturn } from "react-hook-form";
import ImagesSection from "./ImagesSection";
import TableSection from "./TableSection";


const RightSection = ({ form }: { form: UseFormReturn<any> }) => {

  return (
    <div className="grid grid-flow-col auto-cols-fr h-full">
      <div className="col-span-1">
        <ImagesSection form={form} />
      </div>
      <div className="col-span-2 grid grid-rows-2">
        <TableSection form={form}/>
      </div>
    </div>
  );
};

export default RightSection;

import { UseFormReturn } from "react-hook-form";
import ImagesSection from "./imagesSection";
import TableSection from "./tableSection";


const RightSection = ({ form }: { form: UseFormReturn<any> }) => {

  return (
    <div className="grid grid-flow-col auto-cols-fr h-full gap-x-8">
      <div className="col-span-1">
        <ImagesSection form={form} />
      </div>
      <div className="col-span-2 flex-1 flex flex-col">
        <TableSection form={form}/>
      </div>
    </div>
  );
};

export default RightSection;

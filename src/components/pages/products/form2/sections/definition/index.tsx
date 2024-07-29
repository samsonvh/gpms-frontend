import { useAppSelector } from "@/lib/hook";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import InputSection from "./sections/inputs";
import ImageSection from "./sections/images";
import TableSection from "./sections/tables";

type props = {
  form: UseFormReturn<any>;
};

const FormDefinitionSection = ({ form }: props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-8">
        <InputSection form={form} />
        <ImageSection form={form} />
      </div>
      <TableSection form={form}/>
    </div>
  );
};

export default FormDefinitionSection;

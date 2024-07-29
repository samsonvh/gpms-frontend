import EditableTable from "@/components/shared/data-table/EditableTable";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import MaterialTable from "./materialTable";
import SemiFinishedProductTable from "./semiFinishedProductTable";

type props = {
  form: UseFormReturn<any>;
};

const TableSection = ({ form }: props) => {
  return (
    <div className="flex flex-col gap-6">
      <MaterialTable form={form} />
      <SemiFinishedProductTable form={form} />
    </div>
  );
};

export default TableSection;

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { ColumnDef } from "@tanstack/react-table";
import EditableTable, { ActionCell } from "@/components/shared/data-table/editable/editableTable";
import { SemiFinishedProduct } from "@/types/product";

type props = {
  form: UseFormReturn<any>;
};

const columns: ColumnDef<SemiFinishedProduct>[] = [
  {
    accessorKey: "code",
    header: "Code",
    id: "code",
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    id: "quantity",
    meta: {
      inputType: "number",
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    id: "description",
    meta: {
      inputType: "textarea",
    },
  },
  { id: "action", cell: ActionCell },
];

const SemiFinishedProductTable = ({ form }: props) => {
  const { control, getValues } = useFormContext();
  const values = getValues("definition.semiFinishedProducts");

  return (
    <div>
      <FormField
        control={control}
        name="definition.semiFinishedProduct"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Semi-finished products:</FormLabel>
            <FormControl>
              <div>
                <EditableTable
                  columns={columns}
                  data={values}
                  entityName="definition.semiFinishedProducts"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SemiFinishedProductTable;

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
import { Material } from "@/types/product";
import EditableTable, {
  ActionCell,
  FormEditableCell,
} from "@/components/shared/data-table/editable/editableTable";

type props = {
  form: UseFormReturn<any>;
};

const columns: ColumnDef<Material>[] = [
  {
    accessorKey: "code",
    header: "Code",
    id: "code",
    meta: {
      inputType: "select",
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    cell: FormEditableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "consumptionUnit",
    header: "Consumption Unit",
    id: "consumptionUnit",
    cell: FormEditableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "sizeWidthUnit",
    header: "Size/Width Unit",
    id: "sizeWidthUnit",
    cell: FormEditableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "colorCode",
    header: "Color Code",
    id: "colorCode",
    cell: FormEditableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "colorName",
    header: "Color Name",
    id: "colorName",
    cell: FormEditableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    id: "description",
    cell: FormEditableCell,
    meta: {
      inputType: "textarea",
    },
  },
  { id: "action", cell: ActionCell },
];

const MaterialTable = ({ form }: props) => {

  const { control, getValues } = useFormContext();
  const values = getValues("definition.materials");


  return (
    <div>
      <FormField
        control={control}
        name="definition.materials"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Materials:</FormLabel>
            <FormControl>
              <EditableTable
                columns={columns}
                // data={field.value}
                data={values}
                entityName="definition.materials"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default MaterialTable;

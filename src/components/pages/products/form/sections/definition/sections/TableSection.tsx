import EditableTable, {
  ActionCell,
  FormEditableTableCell,
} from "@/components/shared/data-table/EditableTable";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppSelector } from "@/lib/hook";
import { Material, SemiFinishedProduct } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { useFieldArray, UseFormReturn } from "react-hook-form";

const formObject = {
  semiFinishedProducts: "definition.semiFinishedProducts",
  materials: "definition.materials",
};

const semiFinishedProductsColumns: ColumnDef<SemiFinishedProduct>[] = [
  {
    accessorKey: "code",
    header: "Code",
    id: "code",
    cell: FormEditableTableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    id: "name",
    cell: FormEditableTableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    id: "quantity",
    cell: FormEditableTableCell,
    meta: {
      inputType: "number",
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    id: "description",
    cell: FormEditableTableCell,
    meta: {
      inputType: "text",
    },
  },
  {
    id: "action",
    cell: ActionCell,
  },
];

const TableSection = ({ form }: { form: UseFormReturn<any> }) => {
  const materials = useAppSelector((state) => state.materials.data);

  const materialsColumns: ColumnDef<Material>[] = [
    {
      accessorKey: "code",
      header: "Code",
      id: "code",
      cell: FormEditableTableCell,
      meta: {
        inputType: "select",
        items: materials,
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      id: "name",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      accessorKey: "consumptionUnit",
      header: "Consumption unit",
      id: "consumptionUnit",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      accessorKey: "sizeWidthUnit",
      header: "Size/width unit",
      id: "sizeWidthUnit",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      accessorKey: "colorCode",
      header: "Color code",
      id: "colorCode",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      accessorKey: "colorName",
      header: "Color name",
      id: "colorName",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      id: "description",
      cell: FormEditableTableCell,
      meta: {
        inputType: "text",
      },
    },
    {
      id: "action",
      cell: ActionCell,
    },
  ];

  return (
    <>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name={formObject.materials}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Materials:</FormLabel>
              <FormControl>
                <EditableTable
                  form={form}
                  formObject={formObject.materials}
                  data={form.getValues(formObject.materials)}
                  columns={materialsColumns}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name={formObject.semiFinishedProducts}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semi-finished products:</FormLabel>
              <FormControl>
                <EditableTable
                  form={form}
                  formObject={formObject.semiFinishedProducts}
                  data={form.getValues(formObject.semiFinishedProducts)}
                  columns={semiFinishedProductsColumns}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default TableSection;

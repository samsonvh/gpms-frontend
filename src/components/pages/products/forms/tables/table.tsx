"use client";
import { Button } from "@Components/ui/button";
import { FormDataTable } from "@Components/ui/form-data-table";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { Column, ColumnDef, Row, RowData, Table } from "@tanstack/react-table";
import { NewSemiFinishedProduct } from "@Types/products";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

declare module "@tanstack/table-core" {
  export interface ColumnMeta<TData extends RowData, TValue> {
    form: UseFormReturn<any>;
    objectName: string;
    type: string;
  }

  export interface TableMeta<TData extends RowData> {
    setEditedRows: Dispatch<SetStateAction<{}>>;
    editedRows: any;
    revertData: any;
    addRow: any;
    removeRow: any;
  }
}

const ActionCell = ({
  column,
  row,
  table,
}: {
  column: Column<any>;
  row: Row<any>;
  table: Table<any>;
}) => {
  const meta = table.options.meta;
  const form = column.columnDef.meta?.form;
  const objectName = column.columnDef.meta?.objectName;

  const setEditedRows = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.index],
    }));
    if (buttonName !== "edit") {
      meta?.revertData(row.index, buttonName === "cancel");
    }
  };

  const removeRow = () => {
    meta?.removeRow(row.index);
  };

  return meta?.editedRows[row.id] ? (
    <div className="flex">
      <Button
        onClick={(event) => {
          event.preventDefault();
          setEditedRows(event);
        }}
        name="cancel"
      >
        X
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault();
          setEditedRows(event);
        }}
        name="done"
      >
        ✔
      </Button>
    </div>
  ) : (
    <div>
      <Button
        onClick={(event) => {
          event.preventDefault();
          setEditedRows(event);
        }}
        name="edit"
      >
        ✐
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault();
          removeRow();
        }}
        name="remove"
      >
        X
      </Button>
    </div>
  );
};

const EditableCell = ({
  getValue,
  row,
  column,
  table,
}: {
  getValue: () => any;
  row: Row<any>;
  column: Column<any>;
  table: Table<any>;
}) => {
  const form = column.columnDef.meta?.form;
  const objectName = column.columnDef.meta?.objectName;
  const type = column.columnDef.meta?.type;

  return (
    <div>
      <FormField
        control={form!.control}
        name={`${objectName}.${row.index}.${column.id}`}
        render={({ field }) => (
          <FormItem>
            {table.options.meta?.editedRows[row.id] ? (
              <FormControl>
                <Input type={type} placeholder={column.id} {...field} />
              </FormControl>
            ) : (
              <span>{field.value == "" ? "new" : field.value}</span>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const data: NewSemiFinishedProduct[] = [
  {
    code: "0",
    name: "0",
    description: "0",
    quantity: 0,
  },
];

const SemiFinishedProductFormTable = ({
  form,
}: {
  form: UseFormReturn<any>;
}) => {
  const columns: ColumnDef<NewSemiFinishedProduct>[] = [
    {
      accessorKey: "code",
      id: "code",
      header: "Code",
      cell: EditableCell,
      meta: {
        objectName: "semiFinishedProducts",
        form: form,
        type: "text",
      },
    },
    {
      accessorKey: "name",
      id: "name",
      header: "Name",
      cell: EditableCell,
      meta: {
        objectName: "semiFinishedProducts",
        form: form,
        type: "text",
      },
    },
    {
      accessorKey: "description",
      id: "description",
      header: "Description",
      cell: EditableCell,
      meta: {
        objectName: "semiFinishedProducts",
        form: form,
        type: "text",
      },
    },
    {
      accessorKey: "quantity",
      id: "quantity",
      header: "Quantity",
      cell: EditableCell,
      meta: {
        objectName: "semiFinishedProducts",
        form: form,
        type: "number",
      },
    },
    {
      id: "actions",
      cell: ActionCell,
      meta: {
        objectName: "semiFinishedProducts",
        form: form,
        type: "",
      },
    },
  ];

  return (
    <div>
      <FormLabel>Semi-finished products:</FormLabel>
      <FormDataTable
        tableName="semiFinishedProducts"
        form={form}
        columns={columns}
        data={data}
      />
    </div>
  );
};

export { SemiFinishedProductFormTable };

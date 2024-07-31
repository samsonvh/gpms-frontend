import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  RowData,
  Table as TanstackTable,
  useReactTable,
} from "@tanstack/react-table";
import { useFieldArray, useFormContext, UseFormReturn } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FormCombobox from "../../combobox/formCombobox";
import EditableComboBox from "../../combobox/editableComboBox";

declare module "@tanstack/table-core" {
  export interface ColumnMeta<TData extends RowData, TValue> {
    inputType: string;
    items?: any[];
  }

  export interface TableMeta<TData extends RowData> {
    // form?: UseFormReturn<any>;
    // formObject?: string;
    entityName: string;
    setEditableRows: any;
    editableRows: any;
    // revertData: (rowIndex: number, isRevert: boolean) => void;
    addRow: any;
    // removeRow: any;
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  entityName: string;
  form?: UseFormReturn<any>;
  formObject?: string;
}

export const FormEditableCell = ({
  column,
  row,
  table,
}: {
  column: Column<any>;
  row: Row<any>;
  table: TanstackTable<any>;
}) => {
  const { control, getValues } = useFormContext();

  const tableMeta = table.options.meta;
  const columnMeta = column.columnDef.meta;

  const inputType = columnMeta?.inputType;
  const fieldName = cn(tableMeta?.entityName, ".", column.columnDef.id);

  return tableMeta?.editableRows[row.id] ? (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {inputType === "text" ? (
              <Input type="text" {...field} />
            ) : inputType === "number" ? (
              <Input type="number" {...field} />
            ) : inputType === "select" ? (
              <EditableComboBox items={columnMeta?.items!} />
            ) : (
              <Input type="text" {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{getValues(fieldName)}</span>
  );
};

export const ActionCell = ({
  row,
  table,
}: {
  row: Row<any>;
  table: TanstackTable<any>;
}) => {
  const tableMeta = table.options.meta;

  const setEditableRows = (event: MouseEvent<HTMLButtonElement>) => {
    tableMeta?.setEditableRows((old: []) => ({
      ...old,
      [row.id]: !old[row.index],
    }));
  };

  return tableMeta?.editableRows[row.id] ? (
    <div className="flex gap-2">
      <Button
        className="text-black bg-white"
        type="button"
        title="Cancel edit"
        name="cancel"
        onClick={setEditableRows}
      >
        cancel
      </Button>
      <Button
        type="button"
        title="Finish edit"
        name="done"
        onClick={setEditableRows}
      >
        ✔
      </Button>
    </div>
  ) : (
    <Button
      type="button"
      title="Edit this row"
      name="edit"
      onClick={setEditableRows}
    >
      ✐
    </Button>
  );
};

const FooterCell = ({ table }: { table: TanstackTable<any> }) => {
  const tableMeta = table.options.meta;
  const addRow = tableMeta?.addRow;

  return (
    <div>
      <Button type="button" title="Add a new row" onClick={addRow}>
        New
      </Button>
    </div>
  );
};

const EditableTable = <TData extends object, TValue>({
  columns,
  data,
  entityName,
}: DataTableProps<TData, TValue>) => {
  const [editableRows, setEditableRows] = useState<any>([]);

  const fieldArray = useFieldArray({ name: entityName });

  const addRow = () => {
    const newRow: { [key: string]: any } = {};
    columns.map((column) => {
      newRow[column.id!] = "";
    });
    fieldArray.append(newRow);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      entityName,
      addRow,
      editableRows,
      setEditableRows,
    },
  });

  return (
    <div className="border rounded-md">
      <Table className="">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                // key={row.id}
                key={fieldArray ? fieldArray.fields[row.index].id : row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead colSpan={table.getCenterLeafColumns().length}>
              <FooterCell table={table} />
            </TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default EditableTable;

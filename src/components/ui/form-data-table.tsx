"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@Components/ui/table";
import { useState } from "react";
import {
  useFieldArray,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";

interface FormDataTableProps<TData, TValue> {
  tableName: string;
  form: UseFormReturn<any>;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const FooterCell = ({ table }: { table: any }) => {
  const meta = table.options.meta;
  return (
    <div className="footer-buttons">
      <button
        className="add-button"
        onClick={(event) => {
          event.preventDefault();
          meta?.addRow();
        }}
      >
        Add New +
      </button>
    </div>
  );
};

export function FormDataTable<TData, TValue>({
  tableName,
  form,
  columns,
  data,
}: FormDataTableProps<TData, TValue>) {
  const watchFormValue: any[] = useWatch({ name: tableName });
  const fieldArray = useFieldArray({ name: tableName });
  const { setValue } = useFormContext();
  const [editedRows, setEditedRows] = useState({});
  const [originalData, setOrginalData] = useState<any[]>(fieldArray.fields);

  const table = useReactTable({
    //@ts-ignore
    data: fieldArray.fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      editedRows,
      setEditedRows,
      revertData: (rowIndex: number, revert: boolean) => {
        if (revert) {
          columns.map((column) =>
            setValue(
              `${tableName}.${rowIndex}.${column.id}`,
              originalData[rowIndex][column.id!]
            )
          );
        } else {
          setOrginalData(watchFormValue);
        }
      },
      addRow: () => {
        let newRow: { [key: string]: any } = {};
        columns.map((column) => {
          switch (column.meta?.type) {
            case "text":
              newRow[column.id!] = "";
              break;
            case "number":
              newRow[column.id!] = 1;
              break;
          }
        });
        fieldArray.append(newRow);
      },
      removeRow: (rowIndex: number) => {
        fieldArray.remove(rowIndex);
        console.log(form.getValues(tableName));
      },
    },
  });

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={fieldArray.fields[row.index].id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead>
              <FooterCell table={table} />
            </TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

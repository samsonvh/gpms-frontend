import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  useFieldArray,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";
import FormComboboxEditable from "../form-combobox-editable/ComboBoxEditable";

// declare module "@tanstack/table-core" {
//   export interface ColumnMeta<TData extends RowData, TValue> {
//     inputType: string;
//     items?: any[];
//   }

//   export interface TableMeta<TData extends RowData> {
//     form?: UseFormReturn<any>;
//     formObject?: string;
//     setEditableRows: Dispatch<SetStateAction<[]>>;
//     editableRows: any;
//     revertData: (rowIndex: number, isRevert: boolean) => void;
//     addRow: any;
//     removeRow: any;
//   }
// }

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  form?: UseFormReturn<any>;
  formObject?: string;
}

export const FormEditableTableCell = ({
  column,
  row,
  table,
}: {
  column: Column<any>;
  row: Row<any>;
  table: TanstackTable<any>;
}) => {
  const tableMeta = table.options.meta;
  const columnMeta = column.columnDef.meta;

  const form: UseFormReturn<any> | undefined = tableMeta?.form;
  const formObject: string | undefined = tableMeta?.formObject;

  const columnId = column.columnDef.id?.toString();
  const headerName = column.columnDef.header?.toString();
  const inputName = formObject + "." + row.index + "." + columnId;
  const inputType = columnMeta?.inputType;
  const items = columnMeta?.items;

  const onSelect = () => {
    form?.setValue(`${formObject}.${row.index}`, items![row.index]);
  };

  return tableMeta?.editableRows[row.id] ? (
    <FormField
      control={form?.control}
      name={inputName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {inputType === "select" ? (
              <div>
                <Input type="hidden" placeholder={headerName} {...field} />
                <FormComboboxEditable
                  setValue={form!.setValue}
                  items={items!}
                  field={field}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <Input type={inputType} placeholder={headerName} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{form?.getValues(inputName)}</span>
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
    const buttonName = event.currentTarget.name;

    tableMeta?.setEditableRows((old: []) => ({
      ...old,
      [row.id]: !old[row.index],
    }));

    if (buttonName !== "edit") {
      tableMeta?.revertData(row.index, buttonName === "cancel");
    }
  };

  return tableMeta?.editableRows[row.id] ? (
    <>
      <Button type="button" onClick={setEditableRows} name="cancel">
        X
      </Button>
      <Button type="button" onClick={setEditableRows} name="done">
        ✔
      </Button>
    </>
  ) : (
    <Button type="button" onClick={setEditableRows} name="edit">
      ✐
    </Button>
  );
};

const FooterCell = ({ table }: { table: TanstackTable<any> }) => {
  const tableMeta = table.options.meta;

  return (
    <div>
      <Button type="button" onClick={tableMeta?.addRow}>
        New
      </Button>
    </div>
  );
};

const EditableTable = <TData extends object, TValue>({
  columns,
  data,
  form,
  formObject,
}: DataTableProps<TData, TValue>) => {
  const watchValue = useWatch({ name: formObject! });
  const fieldArray = useFieldArray({ name: formObject! });

  const [editableRows, setEditableRows] = useState({});
  const [originalData, setOriginalData] = useState<any[]>(data);

  const revertData = (rowIndex: number, isRevert: boolean) => {
    if (isRevert) {
      form?.setValue(`${formObject}.${rowIndex}`, originalData[rowIndex]);
    } else {
      let temp = originalData;
      temp = temp.map((row, index) =>
        index === rowIndex ? watchValue[rowIndex] : row
      );
      setOriginalData(temp);
    }
  };

  const addRow = () => {
    const newRow: { [key: string]: any } = {};
    columns.map((column) => {
      switch (column.meta?.inputType) {
        case "text":
        case "select":
          newRow[column.id!] = "";
          break;
        case "number":
          newRow[column.id!] = 1;
          break;
      }
    });
    fieldArray.append(newRow);
    form?.setValue(`${formObject}.${fieldArray.fields.length}`, newRow);
    originalData.push(watchValue[fieldArray.fields.length]);
  };
  const removeRow = () => {};

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      form,
      formObject,
      editableRows,
      setEditableRows,
      revertData,
      addRow,
      removeRow,
    },
  });

  return (
    <Table className="">
      <TableHeader className="w-max">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
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
      <TableBody className="w-max">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={form ? fieldArray.fields[row.index].id : row.id}
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
  );
};

export default EditableTable;

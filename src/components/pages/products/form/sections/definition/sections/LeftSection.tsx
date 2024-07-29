import ComboBoxEditable from "@/components/shared/form-combobox-editable/ComboBoxEditable";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/lib/hook";
import React from "react";
import { UseFormReturn } from "react-hook-form";

const InputSection = ({ form }: { form: UseFormReturn<any> }) => {
  const categories = useAppSelector((state) => state.categories.data);

  return (
    <div className="grid grid-rows-7">
      <div className="row-span-1">
        <FormField
          control={form.control}
          name="definition.code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code:</FormLabel>
              <FormControl>
                <Input placeholder="code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name="definition.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name="definition.category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category:</FormLabel>
              <FormControl>
                <div>
                  <Input type="hidden" placeholder="category" {...field} />
                  <ComboBoxEditable setValue={form.setValue} items={categories} field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name="definition.sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes:</FormLabel>
              <FormControl>
                <Input placeholder="size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-1">
        <FormField
          control={form.control}
          name="definition.colors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Colors:</FormLabel>
              <FormControl>
                <Input placeholder="color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="row-span-2">
      <FormField
            control={form.control}
            name="definition.description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description:</FormLabel>
                <FormControl>
                  <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </div>
    </div>
  );
};

export default InputSection;

import EditableComboBox from "@/components/shared/combobox/editableComboBox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getCategoriesAsync } from "@/lib/redux/features/categorySlice";
import { Category } from "@/types/product";
import React, { useEffect } from "react";
import { useFormContext, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any>;
};

const InputSection = ({ form }: props) => {
  const { control, setValue } = useFormContext();

  const categories = useAppSelector((state) => state.categories.data);
  const dispatch = useAppDispatch();

  if (categories.length === 0) {
    dispatch(getCategoriesAsync());
    console.log(categories)
  }

  const onSelectCategory = (item: Category) => {
    setValue("definition.category", item.name);
  };

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-5">
        <FormField
          control={control}
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
        <FormField
          control={control}
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
        <FormField
          control={control}
          name="definition.sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes:</FormLabel>
              <FormControl>
                <Input placeholder="sizes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="definition.colors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Colors:</FormLabel>
              <FormControl>
                <Input placeholder="colors" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col gap-5">
        <FormField
          control={control}
          name="definition.category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category:</FormLabel>
              <FormControl>
                <EditableComboBox
                  items={categories}
                  onSelect={onSelectCategory}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="definition.description"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Description:</FormLabel>
              <FormControl>
                <Textarea
                  className="h-[calc(100%-2rem)] resize-none"
                  placeholder="description"
                  {...field}
                />
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

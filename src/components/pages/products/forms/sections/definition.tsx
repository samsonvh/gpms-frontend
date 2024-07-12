import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@Components/ui/form";
import { Input } from "@Components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SemiFinishedProductFormTable } from "../tables/table";

const FormDefinitionSection = ({ form }: { form: UseFormReturn<any> }) => {
  const fileRef = form.register("images", {
    onChange: async (event) => {},
  });

  return (
    <div id="definition" className="grid grid-cols-4">
      <div className="col-span-1 grid grid-rows-5">
        <div className="row-span-1">
          <FormField
            control={form.control}
            name="code"
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
      </div>
      <div className="col-span-3 grid grid-rows-5">
        <div className="row-span-3 row-start-1 row-end-4">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images:</FormLabel>
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        placeholder="images"
                        {...fileRef}
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="flex-grow border"></div>
                  </div>
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="row-span-2 row-start-4 grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <SemiFinishedProductFormTable form={form}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDefinitionSection;

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any>;
};

const ImageSection = ({ form }: props) => {
  const [currentImage, setCurrentImage] = useState<File>();

  return (
    <FormField
      control={form.control}
      name="definition.images"
      render={({ field }) => (
        <FormItem className="flex-grow">
          <FormLabel>Images:</FormLabel>
          <FormControl>
            <div className="flex h-[calc(100%-2rem)] gap-8">
              <div className="flex-auto flex justify-center border rounded-md overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={currentImage ? "" : "https://placehold.co/600x400/png"}
                  alt="images"
                  className="w-auto"
                />
              </div>
              <div className="w-1/3 xl:w-1/4 flex flex-col gap-4">
                <Input type="hidden" placeholder="images" {...field} />
                <Button type="button">Upload</Button>
                <div className="border flex-grow rounded-md"></div>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageSection;

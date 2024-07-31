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
import React, { useEffect, useRef, useState } from "react";
import {
  useFieldArray,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";

type props = {
  form: UseFormReturn<any>;
};

const ImageSection = ({ form }: props) => {
  const { control, register, watch } = useFormContext();

  const name = "definition.images";
  const images: FileList = watch(name);
  const imagesRef = register(name);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [currentImage, setCurrentImage] = useState<{
    index: number;
    file: File;
  } | null>(null);

  useEffect(() => {
    if (images.length) {
      setCurrentImage({ index: 0, file: images[0] });
    }
  }, [images]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-grow">
          <FormLabel>Images:</FormLabel>
          <FormControl>
            <div className="flex h-[calc(100%-2rem)] gap-8">
              <div className="w-2/3 xl:w-3/5 relative border rounded-md flex items-center justify-center">
                <Image
                  className="h-full w-auto absolute rounded-md p-4"
                  width={0}
                  height={0}
                  src={
                    currentImage
                      ? URL.createObjectURL(currentImage?.file)
                      : "https://placehold.co/2000x2000/png"
                  }
                  alt="image"
                />
                <div className="h-full w-full absolute border-[0.25rem] rounded-md border-white shadow-inner" />
              </div>
              <div className="w-1/3 xl:w-2/5 flex flex-col gap-4">
                <Input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  multiple
                  {...imagesRef}
                  ref={(event) => {
                    imagesRef.ref(event);
                    inputRef.current = event;
                  }}
                />
                <Button type="button" onClick={() => inputRef.current?.click()}>
                  Upload
                </Button>
                <div className="border flex-grow rounded-md">
                  <div className="grid grid-cols-3 grid-flow-row gap-2 p-2 overflow-y-scroll">
                    {Array.from(images).map((image, index) => {
                      return (
                        <div
                          key={index}
                          className="aspect-square relative border rounded-md overflow-hidden shadow-md"
                        >
                          <div
                            className={
                              index === currentImage?.index
                                ? "w-full h-full absolute flex items-center justify-center"
                                : "hidden"
                            }
                          >
                            <div className="w-full h-full bg-black opacity-50" />
                            <span className="absolute text-slate-300">
                              Current
                            </span>
                          </div>
                          <Image
                            className="w-auto h-full hover:cursor-pointer hover:opacity-50 p-2 rounded-md"
                            width={0}
                            height={0}
                            src={URL.createObjectURL(image)}
                            alt="image"
                            onClick={() => {
                              setCurrentImage({ index, file: image });
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
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

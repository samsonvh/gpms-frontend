import UploadButton from "@/components/shared/button/upload-button/UploadButton";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";

const ImagesSection = ({ form }: { form: UseFormReturn<any> }) => {
  const imagesRef = form.register("definition.images");
  const imagesInputRef = useRef<HTMLInputElement | null>(null);
  const imagesWatch: FileList = form.watch("definition.images");
  const [images, setImages] = useState<File[]>([]);
  const [currentImage, setCurrentImage] = useState<File>();

  useEffect(() => {
    let newImages = [];
    for (let i = 0; i < imagesWatch.length; i++) {
      newImages.push(imagesWatch[i]);
      setCurrentImage(imagesWatch[i]);
    }
    setImages(newImages);
  }, [imagesWatch]);

  return (
    <FormField
      control={form.control}
      name="images"
      render={({ field }) => (
        <FormItem className="h-full flex flex-col">
          <FormLabel>Images:</FormLabel>
          <FormControl>
            <div className="flex-grow flex flex-col gap-4">
              <div className="h-1/3 border flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src={
                    currentImage
                      ? URL.createObjectURL(currentImage)
                      : "https://placehold.co/600x400/png"
                  }
                  alt="image"
                  className="object-scale-down w-auto"
                />
              </div>
              <div id="upload-section">
                <Input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  multiple
                  {...imagesRef}
                  ref={(event) => {
                    imagesRef.ref(event);
                    imagesInputRef.current = event;
                  }}
                />
                <UploadButton fileInputRef={imagesInputRef} />
              </div>
              <div className="flex-grow border overflow-y-scroll flex flex-1 p-4">
                <div className="h-0 grid grid-cols-3 place-items-center gap-4">
                  {images.map((image, index) => {
                    return (
                      <Image
                        className="w-full h-auto"
                        width={10}
                        height={10}
                        src={URL.createObjectURL(image)}
                        alt="Image"
                        key={index}
                      />
                    );
                  })}
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

export default ImagesSection;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const Gallery = ({ items }: { items: any[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {/* {items?.map((item, index) => {
          return <CarouselItem key={index}></CarouselItem>;
        })} */}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default Gallery;

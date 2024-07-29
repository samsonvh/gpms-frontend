import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Gallery = ({ items }: { items: any[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {items?.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <Card>
                <CardContent>
                  <Avatar>
                    <AvatarImage src={item} />
                  </Avatar>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Gallery;

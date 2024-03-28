import * as React from "react"
import './InvisibleCarousel.css'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Sample data for image paths (replace this with your actual data)
const images = [
  { id: 1, src: "./invisible1.jpg" },
  { id: 2, src: "./invisible2.jpg" },
  { id: 3, src: "./invisible10.jpg" },
  { id: 4, src: "./invisible4.jpg" },
  { id: 5, src: "./invisible5.jpg" },
  { id: 6, src: "./invisible6.jpg" },
  { id: 7, src: "./invisible7.jpg" },
  { id: 8, src: "./invisible8.jpg" },
  { id: 9, src: "./invisible9.jpg" },
  { id: 10, src: "./invisible10.jpg" },
  { id: 11, src: "./invisible11.jpg" },
  { id: 12, src: "./invisible12.jpg" },
];

export function InvisibleCarousel() {
  return (
    <section className="invisiblecarousel-con">
      <Carousel className="w-full max-w-screen-xs mx-auto">
        <CarouselContent className="-ml-4">
          {/* Using mapping instead of Array.from */}
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

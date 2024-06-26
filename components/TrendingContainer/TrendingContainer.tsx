import React from 'react'
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import './TrendingContainer.css';
import TrendingBox from "../TrendingBox/TrendingBox";
import ColumnRight from "../ColumnRight/ColumnRight";

const TrendingContainer = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      );
    
      // Sample data for image paths (replace this with your actual data)
      const images = [
        { id: 1, src: "./caro1.jpg" },
        { id: 2, src: "./caro2.jpg" },
        { id: 3, src: "./caro3.jpg" },
        { id: 4, src: "./caro4.jpg" },
        { id: 5, src: "./caro5.jpg" },
        { id: 6, src: "./leah1.jpg" },
      ];

  return (
    <div className="trending-wrapper">
        <div className="flex-content">
          <TrendingBox />
          <ColumnRight />
        </div>

        <div className="carocon">
          <Carousel
            plugins={[plugin.current]}
            className="carousel w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
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

          <div className="contents">
            <h3>GALLERY</h3>
            <span>Gallery : Build up to Manchester city game begins.</span>
            <span>Take a look at our first-team squad in training as they prepare for our-top-of-the-table clash against manchester city.</span>
          </div>
        </div>
      </div>
  )
}

export default TrendingContainer
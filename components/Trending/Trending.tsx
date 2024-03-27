// "use client"

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import './Trending.css'
// import TrendingBox from "../TrendingBox/TrendingBox"
// import ColumnRight from "../ColumnRight/ColumnRight"

// export function Trending() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )

// return (
// <div className="trending-con">
//     <div className="flex-content">
//         <TrendingBox />
//         < ColumnRight />
//     </div>

//     <div className="carocon">
//     <Carousel
//       plugins={[plugin.current]}
//       className="carousel w-full max-w-xs"
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>

//       <div className="contents">
//         <h3>GALLERY</h3>
//         <span>Gallery : Build up to Manchester city game begins.</span>
//         <span>Take a look at our first-team squad in training as they
//            prepare for our-top-of-the-table clash against
//            manchester city.
//         </span>
//       </div>
//     </div>
    
   
// </div>
 
//   )
// }

"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import './Trending.css';
import TrendingBox from "../TrendingBox/TrendingBox";
import ColumnRight from "../ColumnRight/ColumnRight";

export function Trending() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Sample data for image paths (replace this with your actual data)
  const images = [
    { id: 1, src: "./martinelli.jpg" },
    { id: 2, src: "./martinelli.jpg" },
    { id: 3, src: "./martinelli.jpg" },
    { id: 4, src: "./odegard.jpg" },
    { id: 5, src: "./odegard.jpg" },
  ];

  return (
    <div className="trending-con">
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
                    <CardContent className="flex aspect-square items-center justify-center p-6">
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
  );
}


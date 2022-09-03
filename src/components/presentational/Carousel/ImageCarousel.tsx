import React, { FC } from "react";
import CardMedia from "@mui/material/CardMedia";
// import "./ImageCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.scss";
import { Pagination } from "swiper";

type ImageCarouselProps = {
  images: string[];
  Carouselheight?: string;
  width?: string;
  Imageheight?: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  Carouselheight = "auto",
  Imageheight = "auto",
  width = "100%",
}) => {
  return (
    // <Carousel
    //   height={Carouselheight}
    //   autoPlay={false}
    //   animation="slide"
    //   swipe
    //   indicators={images.length > 1 ? true : false}
    //   indicatorIconButtonProps={{ className: "carouselIndicator" }}
    // >
    //   {images.map((item, i) => (
    //     <CardMedia
    //       component="img"
    //       width={width}
    //       height={Imageheight}
    //       image={item}
    //       alt="Pet unavailable.."
    //       style={{ objectFit: "cover", maxHeight: Carouselheight }}
    //       key={i}
    //     />
    //   ))}
    // </Carousel>

    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      style={{ height: Carouselheight, width: "100%" }}
    >
      {images.map((item, i) => (
        <SwiperSlide style={{ height: Imageheight }}>
          <CardMedia
            component="img"
            width={width}            
            image={item}
            alt="Pet unavailable.."
            style={{ objectFit: "cover", maxHeight: Carouselheight }}
            key={i}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

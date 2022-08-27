import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import "./ImageCarousel.scss";

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
    <Carousel
      height={Carouselheight}
      autoPlay={false}
      animation="slide"
      swipe
      indicators={images.length > 1 ? true : false}
      indicatorIconButtonProps={{ className: "carouselIndicator" }}
    >
      {images.map((item, i) => (
        <CardMedia
          component="img"
          width={width}
          height={Imageheight}
          image={item}
          alt="Pet unavailable.."
          style={{ objectFit: "cover", maxHeight: Carouselheight }}
          key={i}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

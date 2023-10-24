
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";

export default function Carousel({ recipes }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <div key={recipe._id} className={classes.carouselItem}>
            <img
              src={recipe.images[0]}
              alt={recipe.title}
              className={classes.carouselImage}
            />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

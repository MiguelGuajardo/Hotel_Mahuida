import React, { useState } from "react";
import "./Slider.css";
import Habitacion from "../../images/Habitacion1.jpeg";
import Gastronomía from "../../images/Gastronomia.jpeg";
import Comida from "../../images/Comida1.jpg";

export const Slider = () => {
  const Slides = [
    { url: Habitacion, title: "Habitación 1" },
    { url: Gastronomía, title: "Gastronomia" },
    { url: Comida, title: "Comida" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider_container">
      <div className="slider">
        <div className="left_arrow" onClick={goToPrevious}>
          «
        </div>
        <div className="right_arrow" onClick={goToNext}>
          »
        </div>
        <div
          className="slide"
          style={{ backgroundImage: `url(${Slides[currentIndex].url})` }}
        ></div>
      </div>
    </div>
  );
};

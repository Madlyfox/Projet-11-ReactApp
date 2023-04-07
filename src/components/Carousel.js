import React, { useState } from "react";
import "../scss/carousel.scss";
import Left from "../img/left.png";
import Right from "../img/right.png";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="left" onClick={prevSlide}>
        <img src={Left} alt="" className="leftArr " />
      </div>
      {pictures.map((img, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <img src={img} alt="" key={index} className="img" />
            )}
          </div>
        );
      })}
      <p className="number">
        {current} / {length}
      </p>
      <div className="right" onClick={nextSlide}>
        <img src={Right} alt="" className="rightArr" />
      </div>
    </div>
  );
};

export default Carousel;

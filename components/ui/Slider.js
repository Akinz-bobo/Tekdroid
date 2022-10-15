import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { SliderData } from "./SliderData";

function Slider({ slide }) {
  const [current, setCurrent] = useState(0);
  const length = slide.length - 1;
  // console.log(length);

  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent((prev) => {
      prev = length;
      console.log(prev);
      length--;

      if (prev === 0) {
        // prev === length;
        // console.log(prev);
        return; //console.log(prev);
      } else {
        prev--;
        return; //console.log(prev);
      }
    });
  };
  const nextSlide = () => {
    setCurrent((prev) => {
      return prev === length ? 0 : (prev = prev++);
    });
  };
  return (
    <section className=" flex justify-center items-center w-screen h-screen overflow-hidden">
      <FaArrowAltCircleLeft
        className="left-arrow absolute top-[50%] left-[35px] text-2xl"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow absolute top-[50%] right-[35px] text-2xl"
        onClick={nextSlide}
      />
      {SliderData.map((slide, i) => {
        return (
          <div
            className={
              current === i
                ? " border border-gray-800 h-[90vh] self-center"
                : "hidden"
            }
            key={i}
          >
            <img
              src={slide.image}
              className="image rounded-lg h-screen w-[60vw]"
            />
          </div>
        );
      })}
    </section>
  );
}

export default Slider;

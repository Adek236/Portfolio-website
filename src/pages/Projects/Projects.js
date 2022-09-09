// import { useState } from "react";
import "./Projects.css";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideContent from "./SlideContent/SlideContent";

const Projects = () => {
  return (
    <div className="project">
      <h2>Projects</h2>
      <div className="project__slider">
        <Swiper
          modules={[Navigation]}
          navigation
          speed={800}
          slidesPerView={1}
          loop
          className="project__slider__elements"
        >
          {Array(4)
            .fill()
            .map((el, index) => {
              return (
                <SwiperSlide className="project__slider__elements__item flex-center">
                  <SlideContent key={index} index={index} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <Swiper
        // modules={[Navigation]}
        // navigation
        speed={800}
        slidesPerView={8}
        loop
        className="project__menu"
      >
        {Array(8)
          .fill()
          .map((el, index) => {
            return (
              <SwiperSlide key={index} className="project__menu__item">Avatar{index}</SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Projects;

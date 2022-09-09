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
      <div className="project__slider">
        <Swiper
          modules={[Navigation]}
          navigation
          speed={800}
          slidesPerView={1}
          loop
          className="project__slider__elements"
        >
          {[1, 2, 3, 4].map((el, index) => {
            return (
              <SwiperSlide className="project__slider__elements__item flex-center">
                <SlideContent index={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        // modules={[Navigation]}
        // navigation
        speed={800}
        slidesPerView={3}
        loop
        className="project__menu"
      >
        <SwiperSlide className="project__menu__item">Avatar1</SwiperSlide>
        <SwiperSlide className="project__menu__item">Avatar2</SwiperSlide>
        <SwiperSlide className="project__menu__item">Avatar3</SwiperSlide>
        <SwiperSlide className="project__menu__item">Avatar4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;

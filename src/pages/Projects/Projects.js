// import { useState } from "react";
import "./Projects.css";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Projects = () => {
  return (
    <div className="project">
      <div className="project__slider">
        <div className="project__slider__left-arrow flex-center">
          <KeyboardArrowLeftIcon />
        </div>
        <div className="project__slider__elements">
          <div>SLIDE</div>
        </div>
        <div className="project__slider__right-arrow flex-center">
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        speed={800}
        slidesPerView={1}
        loop
        className="project__menu"
      >
        <SwiperSlide className="project__menu__el">Avatar1</SwiperSlide>
        <SwiperSlide className="project__menu__el">Avatar2</SwiperSlide>
        <SwiperSlide className="project__menu__el">Avatar3</SwiperSlide>
        <SwiperSlide className="project__menu__el">Avatar4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;

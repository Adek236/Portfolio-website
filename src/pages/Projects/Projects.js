// import { useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  //  Controller
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideContent from "./SlideContent/SlideContent";

const Projects = ({ data }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  const buttons = data.buttons;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }} 
      id="projects"
      className="project"
    >
      <h2>{data.title}</h2>
      <div className="project__slider">
        <Swiper
          modules={[
            Navigation,
            // Controller
          ]}
          // controller={{ control: controlledSwiper }}
          navigation
          speed={800}
          slidesPerView={1}
          loop
          className="project__slider__elements"
        >
          {Array.from(data.sliders).map((data, index) => {
            data.buttons = buttons;
            return (
              <SwiperSlide
                key={index}
                className="project__slider__elements__item flex-center"
              >
                <SlideContent data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        // modules={[Controller]}
        // onSwiper={setControlledSwiper}
        // spaceBetween={10}
        speed={800}
        slidesPerView={4}
        loop
        className="project__menu"
      >
        {Array.from(data.sliders).map((el, index) => {
          return (
            <SwiperSlide
              key={`slide-${index}`}
              className="project__menu__item"
              style={{ backgroundImage: `url(${el.miniature})` }}
            >
              {/* {el.miniature} */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Projects;

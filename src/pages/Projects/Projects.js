import { useState } from "react";
import "./Projects.css";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,
  //  Controller  
  } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideContent from "./SlideContent/SlideContent";

const Projects = ({ data }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <div id="projects" className="project">
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
      speed={800} 
      slidesPerView={8} 
      loop className="project__menu">
        {Array.from(data.menu).map((el, index) => {
          return (
            <SwiperSlide key={`slide-${index}`} className="project__menu__item">
              {el.img}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;

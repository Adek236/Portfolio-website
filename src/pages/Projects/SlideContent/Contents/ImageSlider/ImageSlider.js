import "./ImageSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// autoplay only at focus

const ImageSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={true}
      speed={800}
      slidesPerView={1}
      loop
      className="project__slider__elements"
    >
      {data.map((el, i) => {
        return (
          <SwiperSlide key={`item-${i}`}>
            <div
              className="image-slider"
              style={{ backgroundImage: `url(${el})` }}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;

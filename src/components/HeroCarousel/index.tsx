import * as S from "./heroCarousel.style";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export const HeroCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <S.HeroCarousel>
      {/* <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ maxWidth: "900px", maxHeight: "300px" }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://cdn2.unrealengine.com/carousel-1248x702-1248x702-29c215a8890d.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>
      </Swiper> */}
    </S.HeroCarousel>
  );
};

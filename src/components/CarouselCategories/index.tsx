import * as S from "./carouselCategories.style";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

interface CarouselCategoriesProps {
  cards?: string;
  img: string;
}

export const CarouselCategories = ({
  cards,
  img,
  ...props
}: CarouselCategoriesProps) => {
  return (
    <S.CarouselCategories>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="slide">{img}</SwiperSlide>
      </Swiper>
    </S.CarouselCategories>
  );
};

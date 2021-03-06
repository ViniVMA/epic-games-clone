import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import * as S from "./recentlyUpdated.style";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { GamesOnSaleMock } from "utils/Icons/Mocks/Cards";
import { MediumCards } from "components/Cards/MediumCards";

SwiperCore.use([Pagination, Navigation]);

export const RecentlyUpdated = () => {
  return (
    <S.RecentlyUpdated>
      <S.Title>Recently Updated</S.Title>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "100": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "640": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "768": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "1024": {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {GamesOnSaleMock.map(({ game, img, price }, index) => {
          return (
            <SwiperSlide>
              <MediumCards game={game} img={img} price={price} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.RecentlyUpdated>
  );
};

import { CarouselHeroCard } from "components/Cards/CarouselHeroCards";
import { useState } from "react";
import { HeroCarouselMock } from "utils/Icons/Mocks/Cards";
import * as S from "./heroCarousel.style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export const HeroCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <S.HeroCarousel>
      <Swiper
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="carousel"
      >
        <SwiperSlide className="swiperSlide">
          <img src="https://cdn2.unrealengine.com/egs-fn-lol-vi-desktop-1920x1080-a301cbdd6294.jpg?h=1080&resize=1&w=1920" />
        </SwiperSlide>
        {HeroCarouselMock.map(({ game, img, price }, index) => {
          return (
            <SwiperSlide>
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="thumbsWrapper">
        {HeroCarouselMock.map(({ game, thumb }, index) => {
          return <CarouselHeroCard key={index} game={game} thumb={thumb} />;
        })}
      </div>
    </S.HeroCarousel>
  );
};

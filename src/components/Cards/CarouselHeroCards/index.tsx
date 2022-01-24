import * as S from "./carouselHeroCards.style";

interface CarouselHeroCardProps {
  img?: string;
  game: string;
  price?: string;
  thumb: string;
}

export const CarouselHeroCard = ({
  img,
  game,
  price,
  thumb,
  ...props
}: CarouselHeroCardProps) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.Image src={thumb} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <span className="game">{game}</span>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

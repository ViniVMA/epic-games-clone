import * as S from "./smallCards.style";

interface SmallCardProps {
  img: string;
  game: string;
  price: string;
}

export const SmallCard = ({ img, game, price, ...props }: SmallCardProps) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.Image src={img} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <span className="game">{game}</span>
        <span className="price">{price}</span>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

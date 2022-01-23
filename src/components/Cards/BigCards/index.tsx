import * as S from "./bigCards.style";

interface SmallCardProps {
  img: string;
  game: string;
  price: string;
  subtitle: string;
}

export const BigCards = ({
  img,
  game,
  price,
  subtitle,
  ...props
}: SmallCardProps) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <div className="transition" />
        <S.Image src={img} />
      </S.ImageWrapper>
      <S.TextWrapper>
        <h2 className="game">{game}</h2>
        <p className="description">{subtitle}</p>
        <span className="price">{price}</span>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

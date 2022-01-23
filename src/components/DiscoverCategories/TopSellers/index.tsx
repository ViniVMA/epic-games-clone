import { Button } from "components/Button";
import { SmallCard } from "components/Cards/SmallCards";
import { TopSellersMock } from "utils/Icons/Mocks/Cards/";

import * as S from "./newReleases.style";

export const TopSellers = () => {
  return (
    <S.Category>
      <S.TitleWrapper>
        <h3>Top Sellers</h3>
        <Button text="View More" />
      </S.TitleWrapper>
      {TopSellersMock.map(({ game, img, price }, index) => {
        return <SmallCard key={index} game={game} img={img} price={price} />;
      })}
    </S.Category>
  );
};

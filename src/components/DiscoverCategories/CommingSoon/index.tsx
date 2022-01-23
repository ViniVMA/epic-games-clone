import { Button } from "components/Button";
import { SmallCard } from "components/Cards/SmallCards";
import { CommingSoonMock } from "utils/Icons/Mocks/Cards/";

import * as S from "./newReleases.style";

export const CommingSoon = () => {
  return (
    <S.Category>
      <S.TitleWrapper>
        <h3>Comming Soon</h3>
        <Button text="View More" />
      </S.TitleWrapper>
      {CommingSoonMock.map(({ game, img, price }, index) => {
        return <SmallCard key={index} game={game} img={img} price={price} />;
      })}
    </S.Category>
  );
};

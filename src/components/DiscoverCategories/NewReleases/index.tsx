import { Button } from "components/Button";
import { SmallCard } from "components/Cards/SmallCards";
import { NewReleasesMock } from "utils/Icons/Mocks/Cards/";

import * as S from "./newReleases.style";

export const NewReleases = () => {
  return (
    <S.Category>
      <S.TitleWrapper>
        <h3>New Releases</h3>
        <Button text="View More" />
      </S.TitleWrapper>
      {NewReleasesMock.map(({ game, img, price }, index) => {
        return <SmallCard key={index} game={game} img={img} price={price} />;
      })}
    </S.Category>
  );
};

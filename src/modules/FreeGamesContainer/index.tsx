import * as S from "./freeGamesContainer.style";

import { FreeGamesCategories } from "components/FreeGamesCategories";
import { Button } from "components/Button";
import { GiftIcon } from "utils/Icons";

export const FreeGamesContainer = () => {
  return (
    <S.FreeGamesContainer>
      <S.FreeGamesHeader>
        <S.TextWrapper>
          <GiftIcon />
          <h2>Free Games</h2>
        </S.TextWrapper>
        <Button text="View More" />
      </S.FreeGamesHeader>
      <FreeGamesCategories />
    </S.FreeGamesContainer>
  );
};

import { FreeCards } from "components/Cards/FreeGames Cards";
import { FreeGamesMock } from "utils/Icons/Mocks/Cards";
import * as S from "./freeGamesCategories.style";

export const FreeGamesCategories = () => {
  return (
    <S.Category>
      {FreeGamesMock.map(({ game, img, price, subtitle }, index) => {
        return (
          <FreeCards
            key={index}
            game={game}
            img={img}
            price={price}
            subtitle={subtitle}
          />
        );
      })}
    </S.Category>
  );
};

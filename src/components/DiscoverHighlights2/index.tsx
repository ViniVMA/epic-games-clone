import { BigCards } from "components/Cards/BigCards";
import { SecondDiscoverHighlightsMock } from "utils/Icons/Mocks/Cards";
import * as S from "./DiscoverHighlights.style";

export const DiscoverHighlights2 = () => {
  return (
    <S.Category>
      {SecondDiscoverHighlightsMock.map(
        ({ game, img, price, subtitle }, index) => {
          return (
            <BigCards
              key={index}
              game={game}
              img={img}
              price={price}
              subtitle={subtitle}
            />
          );
        },
      )}
    </S.Category>
  );
};

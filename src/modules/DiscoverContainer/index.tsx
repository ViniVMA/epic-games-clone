import * as S from "./discoverContainer.style";

import { Button } from "components/Button";
import { NewReleases } from "components/DiscoverCategories/NewReleases";
import { TopSellers } from "components/DiscoverCategories/TopSellers";
import { CommingSoon } from "components/DiscoverCategories/CommingSoon";

export const DiscoverContainer = () => {
  return (
    <S.DiscoverContainer>
      <NewReleases />
      <TopSellers />
      <CommingSoon />
    </S.DiscoverContainer>
  );
};

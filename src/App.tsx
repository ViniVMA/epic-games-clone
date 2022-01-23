import { Header } from "components/Header";
import { HeroCarousel } from "components/HeroCarousel";
import { StoreFilter } from "components/StoreFilter";
import { DiscoverHighlightsSecondSection } from "pages/DiscoverHighlightsSecondSection";
import { DiscoverHighlightsSection } from "pages/DiscoverHighlightsSection";
import { DiscoverSection } from "pages/DiscoverSection";
import { FreeGamesSection } from "pages/FreeGamesSection";
import { GamesOnSaleSection } from "pages/GamesOnSaleSection";
import { MostPopularSection } from "pages/MostPopularSection";
import { RecentlyUpdatedSection } from "pages/RecentlyUpdatedSection";

import { AppWrapper, Grid, CenterGrid } from "./styles/app.style";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <StoreFilter />
      <Grid>
        <CenterGrid>
          <HeroCarousel />
          <GamesOnSaleSection />
          <DiscoverHighlightsSection />
          <FreeGamesSection />
          <DiscoverSection />
          <DiscoverHighlightsSecondSection />
          <RecentlyUpdatedSection />
          <MostPopularSection />
        </CenterGrid>
      </Grid>
    </AppWrapper>
  );
}

export default App;

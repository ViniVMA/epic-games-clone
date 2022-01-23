import { CarouselCategories } from "components/CarouselCategories/carouselCategories.style";
import { Header } from "components/Header";
import { HeroCarousel } from "components/HeroCarousel";
import { StoreFilter } from "components/StoreFilter";
import { DiscoverHighlightsSection } from "pages/DiscoverHilightsSection";
import { DiscoverSection } from "pages/DiscoverSection";
import { FreeGamesSection } from "pages/FreeGamesSection";
import { GamesOnSaleSection } from "pages/GamesOnSaleSection";
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
        </CenterGrid>
      </Grid>
    </AppWrapper>
  );
}

export default App;

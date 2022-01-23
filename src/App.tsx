import { Header } from "components/Header";
import { HeroCarousel } from "components/HeroCarousel";
import { StoreFilter } from "components/StoreFilter";
import { DiscoverSection } from "pages/DiscoverSection";
import { AppWrapper, Grid, CenterGrid } from "./styles/app.style";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <StoreFilter />
      <Grid>
        <CenterGrid>
          <HeroCarousel />
          <DiscoverSection />
        </CenterGrid>
      </Grid>
    </AppWrapper>
  );
}

export default App;

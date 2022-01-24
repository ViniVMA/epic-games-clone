import styled, { css } from "styled-components";

export const HeroCarousel = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 7fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 30px;
  width: 100%;
  max-height: 738px;
  margin-bottom: 50px;

  @media (max-width: 1199.98px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 1fr;
    gap: 0% 0%;
  }

  .carousel {
    width: 100%;
    max-width: 1312px;
    max-height: 738px;
    border-radius: 20px;

    @media (max-width: 860px) {
      max-width: 500px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  .thumbsWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 255px;
    height: auto;
    max-height: 738px;
    justify-content: space-between;
    @media (max-width: 1199.98px) {
      display: none;
      flex-direction: row;
      max-width: 700px;
    }
  }
`;

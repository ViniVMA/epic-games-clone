import styled from "styled-components";

export const DiscoverContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 50px;

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1780px) {
    > * {
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media (max-width: 1201px) {
    flex-wrap: nowrap;
    /* > * {
      &:nth-child(2) {
        display: none;
      }
    } */
  }
`;

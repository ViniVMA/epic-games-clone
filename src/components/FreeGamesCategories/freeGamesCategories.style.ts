import styled from "styled-components";

export const Category = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  @media (max-width: 860px) {
    > * {
      &:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const TitleWrapper = styled.div``;

import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #121212;
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
`;

export const CenterGrid = styled.div`
  grid-column: 2;
`;

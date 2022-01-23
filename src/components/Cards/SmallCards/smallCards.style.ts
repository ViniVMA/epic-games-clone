import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
  justify-items: center;
  width: 100%;
  max-height: 160px;
  border-radius: 30px;
  padding: 16px 32px;

  :hover {
    background-color: #2a2a2a;
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  justify-content: center;
  justify-self: start;
  margin-left: 2rem;

  .price {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  max-height: 127px;
`;

export const ImageWrapper = styled.div`
  height: 100%;
`;

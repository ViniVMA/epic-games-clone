import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2px;
  color: #fff;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;

  h2 {
    padding-top: 30px;
    font-size: 2.2rem;
    font-weight: 400;
  }

  p {
    padding-top: 15px;
    font-size: 1.6rem;
    color: #ffffff80;
  }

  span {
    padding-top: 25px;
    font-size: 2.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  max-width: 685px;

  .transition {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: inherit;
    border-radius: 20px;
  }
  :hover {
    background-color: #ffffff30;
  }
`;

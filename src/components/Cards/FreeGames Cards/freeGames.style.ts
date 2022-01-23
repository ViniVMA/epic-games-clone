import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2px;
  color: #fff;
  margin: 0 5px;
  border-radius: 5px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;

  h2 {
    padding-top: 30px;
    font-size: 1.6rem;
    font-weight: 400;
  }

  p {
    padding-top: 15px;
    font-size: 1.6rem;
    color: #ffffff80;
  }

  span {
    padding-top: 25px;
    font-size: 1.6rem;
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 685px;
  border-radius: 5px;

  .transition {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: inherit;
  }
  :hover {
    background-color: #ffffff30;
  }
`;

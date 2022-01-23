import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2px;
  color: #fff;
  margin: 0px 0px 30px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  flex-shrink: shrink;

  h2 {
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 12px;
  }

  p {
  }

  span {
    font-size: 1.6rem;
    font-weight: 300;
  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) {
    h2 {
      font-size: 1.4rem;
      font-weight: 300;
      margin-bottom: 12px;
    }
    span {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
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
  }
  :hover {
    background-color: #ffffff30;
  }
`;

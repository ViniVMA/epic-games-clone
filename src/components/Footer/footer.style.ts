import styled from "styled-components";

export const Footer = styled.footer`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0% 0%;
  height: 474px;
  background-color: #2a2a2a;
  padding: 20px 72px 40px;
`;

export const Links = styled.div`
  font-size: 1.3rem;
  display: flex;
  max-width: 800px;
  color: #fff;
  padding-top: 70px;

  ul {
    list-style-type: none;
    margin: 15px;
    padding: 0;
    line-height: 20px;
    h2 {
      font-size: 1.3rem;
      color: #ffffff40;
    }
  }
`;

export const Copyrights = styled.div`
  border-top: 1px solid #ffffff30;

  padding: 20px 0;
  p {
    max-width: 800px;
  }
`;

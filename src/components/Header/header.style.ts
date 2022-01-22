import styled from "styled-components";
import { Logo } from "utils/Icons/Logo";

export const Header = styled.header`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 0% 0%;
  height: 50px;
  width: 100%;
  background-color: #2a2a2a;
  font-family: OpenSans, sans-serif, arial;
  font-size: 1rem;
  text-transform: uppercase;

  a:hover {
    color: #fff;
  }
`;

export const NavBar = styled.nav`
  grid-column: 1;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style-type: none;

    li {
      a {
        padding: 15px;
      }

      a:hover {
        padding-bottom: 13px;
        border-bottom: 5px solid #0078f2;
        transition: width 2s;
      }
    }
  }
`;

export const HeaderLogo = styled.div`
  height: 60%;
  margin: 0 15px 0 15px;
  align-self: center;

  img {
    height: 30px;
  }
`;

export const Signin = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    align-self: center;
  }
`;

export const GlobeWrapper = styled.div`
  margin: 0 15px 0 15px;
  align-self: center;

  img {
    height: 15px;

    :hover {
      color: red;
    }
  }
`;

export const HeaderButtons = styled.ul`
  .signin {
    a {
      padding: 20px;
    }
  }

  .download {
    a {
      background-color: #0078f2;
      padding: 20px;

      :hover {
        background-color: #007dfc;
      }
    }
  }
`;

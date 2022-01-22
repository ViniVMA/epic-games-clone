import { Globe } from "utils/Icons/GlobeGrid";
import { Logo } from "utils/Icons/Logo";
import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <S.HeaderLogo>
          <Logo />
        </S.HeaderLogo>
        <ul>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Unreal Engine</a>
          </li>
        </ul>
      </S.NavBar>
      <S.Signin>
        <S.GlobeWrapper>
          <Globe />
        </S.GlobeWrapper>
        <S.HeaderButtons>
          <li className="signin">
            <a href="/">Signin</a>
          </li>
          <li className="download">
            <a href="/">Download</a>
          </li>
        </S.HeaderButtons>
      </S.Signin>
    </S.Header>
  );
};

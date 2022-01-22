import * as S from "./storeFilter.style";

export const StoreFilter = () => {
  return (
    <S.Filter>
      <S.Grid>
        <input placeholder="teste"></input>
        <ul>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/">Browser</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
        </ul>
      </S.Grid>
    </S.Filter>
  );
};

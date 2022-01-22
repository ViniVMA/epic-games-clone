import styled from "styled-components";

export const Filter = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
  align-items: center;
  height: 100px;
  width: 100%;
  align-items: center;
  font-size: 1.6rem;
  background-color: #121212;
  color: #5b5b5b;

  a:hover {
    color: #fff;
  }

  input {
    height: 40px;
    width: 160px;
    border-radius: 30px;
    background-color: #202020;
    outline: none;
    border: none;
    padding-left: 10px;
    color: #fff;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      a {
        padding: 10px;
      }
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2;
`;

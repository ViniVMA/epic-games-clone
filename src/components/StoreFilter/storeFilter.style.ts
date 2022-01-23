import styled from "styled-components";

export const Filter = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0%;
  align-items: center;
  z-index: 99;
  height: 100px;
  width: 100%;
  align-items: center;
  font-size: 1.6rem;
  background-color: #121212;
  color: #5b5b5b;
  position: sticky;
  top: 0;
  a:hover {
    color: #fff;
  }

  input {
    height: 35px;
    width: 145px;
    border-radius: 30px;
    background-color: #202020;
    outline: none;
    border: none;
    padding-left: 30px;
    color: #fff;
  }

  ul {
    display: flex;
    list-style-type: none;
    font-family: 800;
    margin-left: 10px;

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

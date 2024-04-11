import styled from "styled-components";

export const SSearch = styled.div`
  width: 90%;
  border-radius: 5px;
  padding: 5px;

  input {
    border-radius: 5px;
    width: 100%;
    align-items: center;
    border: 2px solid #fff;
    padding: 6px;
    outline: none;
    transition: border 0.3s ease, box-shadow 0.5s ease;

    &:focus {
      border: 2px solid #f4bf76;
      box-shadow: 0 0 5px rgba(244, 191, 118, 0.5);
    }
  }
`;
export const SSearchProducts = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  &:hover {
    background-color: lightgray;
  }
`;

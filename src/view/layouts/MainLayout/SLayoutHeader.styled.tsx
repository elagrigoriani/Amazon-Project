import styled from "styled-components";

export const SLayoutHeader = styled.div`
  width: 100%;
  background-color: #141920;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
    height: 30px;
  }

  .cart-button {
    background-color: #141920;
    padding: 5px;
    border: 1px solid #141920;
    border-radius: 5px;
    cursor: pointer;
  }
  .cart-button img {
    width: 30px;
    height: 30px;
  }
  .cart-button:hover {
    border: 1px solid #fff;
  }
`;

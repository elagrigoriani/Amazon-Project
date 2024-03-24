import styled from "styled-components";

export const SProductPage = styled.div`
  width: 70%;
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 5px;
  border: 1px solid lightgrey;
  align-items: center;
  margin-top: 10px;
`;

export const SProductPageImage = styled.div`
  display: flex;
  padding: 5px;
  margin: 10px;
`;

export const SProductPagePrice = styled.div`
  margin-top: 100px;
  margin-left: 100px;

  p {
    margin-bottom: 24px;
  }
  span {
    font-weight: bold;
  }
`;
export const SProductPageAddToCart = styled.div`
  border: 1px solid #ff9900;
  background-color: transparent;
  color: #ff9900;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    border: 1px solid #ff9900;
    background-color: #ff9900;
    color: white;
  }
`;

export const SProductPageCheckOut = styled.div`
  border: 1px solid #ff9900;
  background-color: #ff9900;
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    border: 1px solid #ff9900;
    background-color: transparent;
    color: #ff9900;
  }
`;

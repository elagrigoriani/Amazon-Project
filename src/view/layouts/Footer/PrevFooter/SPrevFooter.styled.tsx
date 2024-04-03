import styled from "styled-components";

export const SBackground = styled.div`
  background-color: #232f3e;
  border-bottom: 1px solid grey;
`;
export const SPrevFooter = styled.div`
  width: 70%;
  background-color: #232f3e;
  display: flex;
  margin: auto;
  padding: 50px 0px;
`;

export const SContent = styled.div`
  width: 70%;
  color: #fff;
  display: flex;
  display: inline-block;

  a {
    color: #fff;
    text-decoration: none;
    padding: 3px;
    margin-top: 3px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const SLink = styled.div`
  padding: 1px;
  display: flex;
  flex-direction: column;
`;

export const SBut = styled.div`
  .cart-button {
    background-color: #141920;
    padding: 5px;
    border: 1px solid #141920;
    border-radius: 5px;
    cursor: pointer;
  }

  .cart-button:hover {
    border: 1px solid #fff;
  }
`;

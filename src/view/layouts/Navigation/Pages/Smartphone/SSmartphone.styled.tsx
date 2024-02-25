import styled from "styled-components";

export const SWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;
  padding: 20px 0px;
`;

export const SSmartphone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  /* background-color: green; */
  border: 1px solid #ffdca8;
  border-radius: 10px;
  span {
    font-weight: bold;
    margin-top: 5px;
  }
  p {
    max-width: 200px;
    color: #b1afad;
    line-height: 20px;
    margin: 5px 0px;
  }
  img {
    max-width: 110px;
  }
  button {
    border-radius: 5px;
    background-color: #ff9900;
    color: #ffffff;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #ff9900;
  }
  button:hover {
    background-color: transparent;
    color: #ff9900;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: transparent;
  color: #a7a7a7;
  cursor: pointer;
  border: 1px solid #a7a7a7;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #a7a7a7;
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationNumber = styled.span`
  padding: 12px;
  margin: 12px 5px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background-color: #737373;
    color: #ffffff;
    border-radius: 5px;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

export const PaginationText = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

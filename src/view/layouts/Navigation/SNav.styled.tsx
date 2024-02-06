import styled from "styled-components";

export const SNav = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  padding: 8px;
  background-color: #252f3d;

  a {
    padding: 9px;
    border-radius: 3px;
    border: 1px solid #252f3d;
    text-decoration: none;
    color: #ffffff;
  }
  & a:hover {
    border: 1px solid #ffffff;
  }
`;

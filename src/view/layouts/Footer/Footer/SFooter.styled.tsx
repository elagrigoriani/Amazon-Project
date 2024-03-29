import styled from "styled-components";

export const SBackground = styled.div`
  background-color: #131a22;
`;
export const SFooter = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
  padding: 50px 0px;
  font-size: 13px;
`;

export const SContent = styled.div`
  width: 70%;
  color: #fff;
  display: flex;
  display: inline-block;

  a {
    color: #999;
    text-decoration: none;
    padding: 3px;
    margin-top: 12px;
    line-height: 16px;
  }
  a:hover {
    text-decoration: underline;
  }
  h4 {
    color: #ddd;
  }
`;

export const SLink = styled.div`
  padding: 1px;
  display: flex;
  flex-direction: column;
  max-width: 105px;
`;

export const SSocial = styled.div`
  width: 60%;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #999;
`;
export const SSocialIcons = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    border: 1px solid #999;
  }
`;

export const SLanguage = styled.div``;

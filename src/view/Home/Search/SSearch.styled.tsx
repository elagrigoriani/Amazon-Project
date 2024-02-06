import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

export const SSearch = styled.div`
  display: flex;

  input {
    border-radius: 6px 0 0 6px;
    width: 1000px;
    height: 40px;
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

export const SInput = styled.div`
  display: inline-block;
`;

export const StyledSearchOutlined = styled(SearchOutlined)`
  padding: 9px;
  font-size: 22px;
  background: #f4bf76;
  color: #000;
  cursor: pointer;
  transition: background-color 0.1s ease;
  border-radius: 0 6px 6px 0;

  &:hover {
    background-color: #e8a446;
  }
`;

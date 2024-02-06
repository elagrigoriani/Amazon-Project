import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SInput, SSearch } from "./SSearch.styled";
import { StyledSearchOutlined } from "./SSearch.styled";

export function Search() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");

  function onSearch() {
    if (searchKeyword.length > 3) {
      navigate(`/${searchKeyword}`);
    }
  }

  return (
    <SSearch>
      <input
        placeholder="მოძებნე პროდუქტი"
        value={searchKeyword}
        onChange={(event) => setSearchKeyword(event.target.value)}
      />
      <SInput>
        <StyledSearchOutlined onClick={() => onSearch()} />{" "}
      </SInput>
    </SSearch>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { SInput, SSearch } from "./SSearch.styled";
// import { StyledSearchOutlined } from "./SSearch.styled";
// import { useIntl } from "react-intl";

// export function Search() {
//   const navigate = useNavigate();
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const { formatMessage } = useIntl();

//   function onSearch() {
//     if (searchKeyword.length > 3) {
//       navigate(`/${searchKeyword}`);
//     }
//   }

//   return (
//     <SSearch>
//       <input
//         placeholder={formatMessage({ id: "search.placeholder" })}
//         value={searchKeyword}
//         onChange={(event) => setSearchKeyword(event.target.value)}
//       />
//       <SInput>
//         <StyledSearchOutlined onClick={() => onSearch()} />{" "}
//       </SInput>
//     </SSearch>
//   );
// }

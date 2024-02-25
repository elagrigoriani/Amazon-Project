import axios from "axios";
import { useEffect, useState } from "react";
import { SCat, SNav } from "./SNav.styled";
import { ICategories } from "./shared/types";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function getCategories() {
    const resp = await axios.get("http://localhost:3000/product-category");
    setCategories(resp.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SNav>
      {categories.map((category: ICategories) => {
        return (
          <SCat onClick={() => navigate(`/${category.name}`)}>
            {category.name}
          </SCat>
        );
      })}
    </SNav>
  );
}

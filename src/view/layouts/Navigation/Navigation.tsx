import axios from "axios";
import { useEffect, useState } from "react";
import { SNav } from "./SNav.styled";

export function Navigation() {
  const [categories, setCategories] = useState([]);
  async function getCategories() {
    const resp = await axios.get("http://localhost:3000/product-category");
    setCategories(resp.data);
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <SNav>
      {categories.map((category: any) => {
        return <a href="#">{category.name}</a>;
      })}
    </SNav>
  );
}

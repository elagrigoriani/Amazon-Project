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
  console.log(categories);
  return (
    <SNav>
      {/* {categories.map((category: any) => {
        return <a href="#">{category.name}</a>;
      })} */}
      <a href="#">სმარტფონები</a>
      <a href="#">ლეპტოპები</a>
      <a href="#">აუდიო</a>
      <a href="#">ფოტო | ვიდეო</a>
      <a href="#">გეიმინგი</a>
      <a href="#">TV | მონიტორები</a>
      <a href="#">ტაბები</a>
    </SNav>
  );
}

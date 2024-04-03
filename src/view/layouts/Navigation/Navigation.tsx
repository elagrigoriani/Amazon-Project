import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { SCat, SNav } from "./SNav.styled";
import { ICategories } from "./shared/types";
import { useNavigate } from "react-router-dom";
import {
  LocaleContext,
  Locale_Enum,
} from "../../../provider/LocaleProvider/LocaleContext";

export function Navigation() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  async function getCategories() {
    const resp = await axios.get("http://localhost:3000/product-category");
    setCategories(resp.data);
    console.log(resp.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const categoriess = [
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Audio" },
    { id: 4, name: "Photo|Video" },
    { id: 5, name: "Gaming" },
    { id: 6, name: "TV|Monitors" },
    { id: 7, name: "Tabs" },
  ];

  return (
    <SNav>
      {locale === Locale_Enum.EN
        ? categoriess.map((category: any) => (
            <SCat
              key={category.id}
              onClick={() => navigate(`/${category.name}`)}
            >
              {category.name}
            </SCat>
          ))
        : categories.map((category: ICategories) => (
            <SCat
              key={category.id}
              onClick={() => navigate(`/${category.name}`)}
            >
              {category.name}
            </SCat>
          ))}
    </SNav>
  );
}

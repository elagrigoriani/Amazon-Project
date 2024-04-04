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
  const [categories, setCategories] = useState<Array<ICategories>>([]);
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

  const categoriesEng = [
    { nameEng: "Smartphones" },
    { nameEng: "Laptops" },
    { nameEng: "Audio" },
    { nameEng: "Photo|Video" },
    { nameEng: "Gaming" },
    { nameEng: "TV|Monitors" },
    { nameEng: "Tabs" },
  ];

  const categoriesToShow = categories.map(
    (obj: ICategories, index: number) => ({
      ...obj,
      ...categoriesEng[index],
    })
  );

  return (
    <SNav>
      {categoriesToShow.map((item: ICategories, index: number) => (
        <SCat key={index} onClick={() => navigate(`/${item.nameEng}`)}>
          {locale === Locale_Enum.EN ? item.nameEng : item.name}
        </SCat>
      ))}
    </SNav>
  );
}

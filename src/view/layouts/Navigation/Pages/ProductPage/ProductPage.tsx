import { useEffect, useState } from "react";
import { IProducts } from "../../shared/types";
import axios from "axios";
import {
  SProductPage,
  SProductPageAddToCart,
  SProductPageCheckOut,
  SProductPageImage,
  SProductPagePrice,
} from "./SProductPage.styled";
import { useCart } from "../../../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export function ProductPage() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { cartProducts, addToCart } = useCart();
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/purchases");
  };

  console.log(products, cartProducts);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product?&pageSize=130`
      );
      if (Array.isArray(resp.data.products)) {
        setProducts(resp.data.products);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <SProductPage>
      {products?.map((product: IProducts) => (
        <SProductPageImage key={product.id}>
          {" "}
          <div>
            <img
              style={{ width: "550px", height: "550px" }}
              src={product.image}
              alt={product.title}
            />
          </div>
          <SProductPagePrice>
            {" "}
            <p>{product.description}</p>
            <span>{product.price} ₾</span>
            <SProductPageAddToCart onClick={() => addToCart(product.id)}>
              კალათაში დამატება
            </SProductPageAddToCart>
            <SProductPageCheckOut onClick={() => handlePurchase()}>
              ყიდვა
            </SProductPageCheckOut>
          </SProductPagePrice>
        </SProductPageImage>
      ))}
    </SProductPage>
  );
}

import { useParams } from "react-router-dom";
import {
  SProductPage,
  SProductPageAddToCart,
  SProductPageImage,
  SProductPagePrice,
} from "./SProductPage.styled";
import { useEffect, useState } from "react";
import { IProducts } from "../../shared/types";
import { useCart } from "../../../../../hooks/useCart";
import axios from "axios";

export function ProductPage() {
  const [product, setProduct] = useState<IProducts | null>(null);
  const { addToCart } = useCart();
  const { productId } = useParams();
  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  async function getProduct(productId: string) {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product/${productId}`
      );
      if (resp.data) {
        setProduct(resp.data);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <SProductPage>
      <SProductPageImage>
        <div>
          <img
            style={{ width: "550px", height: "550px" }}
            src={product.image}
            alt={product.title}
          />
        </div>
        <SProductPagePrice>
          <p>{product.description}</p>
          {product.salePrice !== null ? (
            <>
              <span style={{ color: "black" }}>
                <s>{product.price} ₾</s>
              </span>
              <span>
                <span style={{ color: "red" }}>ფასდაკლება</span>{" "}
                {product.salePrice} ₾
              </span>
            </>
          ) : (
            <span style={{ marginBottom: "25px" }}>{product.price} ₾</span>
          )}
          <SProductPageAddToCart onClick={() => addToCart(product.id)}>
            კალათაში დამატება
          </SProductPageAddToCart>
        </SProductPagePrice>
      </SProductPageImage>
    </SProductPage>
  );
}

import { Carousel } from "antd";
import { SCarouselFunc } from "./SCarouselFunc";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../Navigation/shared/types";
import { useCart } from "../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  SSmartphone,
  SWrapper,
  LikeButton,
} from "../../../view/layouts/Navigation/Pages/Smartphone/SSmartphone.styled";
import { useLike } from "../../../hooks/useLike";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export function CarouselFunc() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { cartProducts, addToCart } = useCart();
  const { likeProducts, addToLike } = useLike();
  console.log(cartProducts, likeProducts);
  async function getProducts(categoryName: string) {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product?categoryName=${encodeURIComponent(
          categoryName
        )}&pageSize=130`
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

  useEffect(() => {
    getProducts("აუდიო");
  }, []);
  return (
    <>
      <Carousel autoplay>
        <SCarouselFunc>
          <img
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt="img"
          />
        </SCarouselFunc>
        <SCarouselFunc>
          <img
            src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
            alt="img"
          />
        </SCarouselFunc>
        <SCarouselFunc>
          <img
            src="https://m.media-amazon.com/images/I/61Pdr3h6MmL._SX3000_.jpg"
            alt="img"
          />
        </SCarouselFunc>
        <SCarouselFunc>
          <img
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt="img"
          />
        </SCarouselFunc>
        <SCarouselFunc>
          <img
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
            alt="img"
          />
        </SCarouselFunc>
      </Carousel>
      <div>
        <SWrapper>
          {products.map((product: IProducts) => (
            <SSmartphone key={product.id}>
              <img src={product.image} alt={product.title} />
              {product.salePrice !== null ? (
                <>
                  <span style={{ color: "black" }}>
                    <s>{product.price} ₾</s>
                  </span>
                  <span>
                    <span style={{ color: "red" }}>Sale</span>{" "}
                    {product.salePrice} ₾
                  </span>
                </>
              ) : (
                <span>{product.price} ₾</span>
              )}
              <p>{product.description}</p>
              <div style={{ display: "flex" }}>
                <div>
                  <button onClick={() => addToCart(product.id)}>
                    კალათაში დამატება
                  </button>{" "}
                </div>
                <div>
                  <LikeButton onClick={() => addToLike(product.id)}>
                    {
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#ff9900" }}
                      />
                    }
                  </LikeButton>
                </div>
              </div>
            </SSmartphone>
          ))}
        </SWrapper>
      </div>
    </>
  );
}

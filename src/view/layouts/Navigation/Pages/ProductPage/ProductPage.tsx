import { useNavigate, useParams } from "react-router-dom";
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
import { FormattedMessage } from "react-intl";
import {
  LikeButton,
  SSmartphone,
  SWrapper,
} from "../Smartphone/SSmartphone.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLike } from "../../../../../hooks/useLike";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export function ProductPage() {
  const [product, setProduct] = useState<IProducts | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProducts[]>([]);
  const { likeProducts, addToLike } = useLike();
  const { addToCart } = useCart();
  const { productId } = useParams();
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState<string>(() => {
    const storedCurrentCategory = localStorage.getItem("currentCategory");
    return storedCurrentCategory ? JSON.parse(storedCurrentCategory) : "";
  });
  const handlePurchase = (productId: string) => {
    navigate(`/productpage/${productId}`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getProduct(productId);

    if (product && product.category_name) {
      localStorage.setItem(
        "currentCategory",
        JSON.stringify(product.category_name)
      );
      setCurrentCategory(product.category_name);
    }
  }, [productId, product]);

  useEffect(() => {
    if (currentCategory) {
      getRelatedProducts();
    }
  }, [currentCategory]);
  async function getProduct(productId: string) {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product/${productId}`
      );
      if (resp.data) {
        setProduct(resp.data);
      } else {
        console.error("Error fetching product");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  async function getRelatedProducts() {
    try {
      const response = await axios.get(
        `http://localhost:3000/product/?categoryName=${currentCategory}&pageSize=50`
      );
      console.log("პროდუქტები კატეგორიის მიხედვით", response.data);
      setRelatedProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching related products by category", error);
    }
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
                  <span style={{ color: "red", marginLeft: "5px" }}>
                    <FormattedMessage id="sale" />
                  </span>{" "}
                  {product.salePrice} ₾
                </span>
              </>
            ) : (
              <span style={{ marginBottom: "25px" }}>{product.price} ₾</span>
            )}
            <SProductPageAddToCart onClick={() => addToCart(product.id)}>
              <FormattedMessage id="addToCart" />
            </SProductPageAddToCart>
          </SProductPagePrice>
        </SProductPageImage>
      </SProductPage>
      <SProductPage style={{ border: "none", color: "#ff9900" }}>
        <h3>
          <FormattedMessage id="similarproducts" />
        </h3>
      </SProductPage>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          width: "90%",
        }}
      >
        <SWrapper>
          {relatedProducts.map((relatedProduct) => (
            <SwiperSlide key={relatedProduct.id}>
              <SSmartphone>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3px",
                  }}
                >
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => handlePurchase(relatedProduct.id)}
                  >
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      style={{ width: "150px", height: "120px" }}
                    />
                  </button>
                  {relatedProduct.salePrice !== null ? (
                    <>
                      <span style={{ color: "black" }}>
                        <s>{relatedProduct.price} ₾</s>
                      </span>
                      <span>
                        <span style={{ color: "red" }}>
                          {" "}
                          <FormattedMessage id="sale" />
                        </span>{" "}
                        {relatedProduct.salePrice} ₾
                      </span>
                    </>
                  ) : (
                    <span style={{ marginBottom: "25px" }}>
                      {relatedProduct.price} ₾
                    </span>
                  )}
                  <p>{relatedProduct.description}</p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "40px",
                    }}
                  >
                    <div>
                      <button onClick={() => addToCart(relatedProduct.id)}>
                        <FormattedMessage id="addToCart" />
                      </button>{" "}
                    </div>
                    <div>
                      <LikeButton onClick={() => addToLike(relatedProduct.id)}>
                        {
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: "#ff9900" }}
                          />
                        }
                      </LikeButton>
                    </div>
                  </div>
                </div>
              </SSmartphone>
            </SwiperSlide>
          ))}
        </SWrapper>
      </Swiper>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { ICartProduct } from "../view/layouts/Navigation/shared/types";
import {
  CartProductRow,
  CartProductInfo,
  CartProductImage,
  CartProductDesc,
  CartProductTitle,
  CartProductPrice,
  CartButtonsWrapper,
  CartCount,
} from "./CartModal.styled";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../utils/cartUtils";

export function CheckOut() {
  const navigate = useNavigate();
  const { cartProducts, getCartProducts } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handlePurchase = () => {
    fetch("http://localhost:3000/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartProducts),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Purchase response:", data);
        navigate("/creditcard");
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Purchase error:", error);
      });
  };
  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    const { totalPrice } = calculateTotal(cartProducts);
    setTotalPrice(totalPrice);
  }, [cartProducts]);
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ marginLeft: "20px", color: "#FF9900", marginTop: "20px" }}>
        ყიდვის გვერდი
      </h2>
      {cartProducts ? (
        cartProducts.map((product: ICartProduct, index: number) => (
          <div key={index}>
            <CartProductRow
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CartProductInfo
                style={{
                  width: "30%",
                }}
              >
                <CartProductImage>
                  <img
                    src={product.cartProduct.image}
                    alt={product.cartProduct.description}
                  />
                </CartProductImage>
                <CartProductDesc>
                  <CartProductTitle>
                    {product.cartProduct.description}
                  </CartProductTitle>
                  <CartProductPrice>
                    {product.cartProduct.salePrice !== null ? (
                      <>
                        <span style={{ color: "black" }}>
                          <s>
                            {" "}
                            <b>{product.cartProduct.price} ₾ </b>
                          </s>
                        </span>
                        <span>
                          <span style={{ color: "red" }}>
                            <b>ფასდაკლება</b>
                          </span>{" "}
                          <b>{product.cartProduct.salePrice} ₾</b>
                        </span>
                      </>
                    ) : (
                      <span style={{ marginBottom: "25px" }}>
                        <b>{product.cartProduct.price} ₾</b>
                      </span>
                    )}
                  </CartProductPrice>
                  <CartButtonsWrapper>
                    <CartCount>
                      {product.count} <span> ცალი </span>
                    </CartCount>
                  </CartButtonsWrapper>
                </CartProductDesc>
              </CartProductInfo>
            </CartProductRow>
          </div>
        ))
      ) : (
        <p>არ არის პროდუქტები</p>
      )}
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        პროდუქტები საერთო ღირებულება: <b>{totalPrice} ლ</b>
      </div>
      <button
        style={{
          border: "1px solid #FF9900",
          backgroundColor: "#FF9900",
          color: "white",
          padding: "12px 20px",
          margin: "20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.borderColor = "#FF9900";
          e.target.style.color = "#FF9900";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#FF9900";
          e.target.style.borderColor = "white";
          e.target.style.color = "white";
        }}
        onClick={() => handlePurchase()}
      >
        ყიდვა
      </button>
    </div>
  );
}

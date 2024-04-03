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
import { FormattedMessage, useIntl } from "react-intl";

export function CheckOut() {
  const navigate = useNavigate();
  const { cartProducts, getCartProducts } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItem, setTotalItem] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const deliveryPrice = 5;
  const { formatMessage } = useIntl();

  console.log("testt", cartProducts);

  const testData = cartProducts && {
    id: cartProducts[0].id,
    created_at: cartProducts[0].created_at,
    updated_at: cartProducts[0].updated_at,
    totalItems: totalItem,
    totalPrice: totalPrice,
  };

  const handlePurchase = () => {
    if (!address) {
      setError(formatMessage({ id: "addresserror" }));
      return;
    }
    fetch("http://localhost:3000/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: cartProducts && JSON.stringify(testData),
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
    const { totalPrice, totalItems } = calculateTotal(cartProducts);
    setTotalPrice(totalPrice);
    setTotalItem(totalItems);
  }, [cartProducts]);
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ marginLeft: "20px", color: "#FF9900" }}>
        {" "}
        <FormattedMessage id="checkout" />
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
                            <b>
                              {" "}
                              <FormattedMessage id="sale" />
                            </b>
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
                      {product.count}{" "}
                      <span>
                        {" "}
                        <FormattedMessage id="item" />
                      </span>
                    </CartCount>
                  </CartButtonsWrapper>
                </CartProductDesc>
              </CartProductInfo>
            </CartProductRow>
          </div>
        ))
      ) : (
        <p>
          {" "}
          <FormattedMessage id="noproducts" />
        </p>
      )}
      <div
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          width: "30%",
          margin: "auto",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <FormattedMessage id="address" />:{" "}
          <input
            placeholder={formatMessage({ id: "address" })}
            style={{ borderRadius: "5px", padding: "3px", width: "80%" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "left", lineHeight: "30px" }}>
            <p>
              {" "}
              <FormattedMessage id="productprice" />:
            </p>
            <p>
              {" "}
              <FormattedMessage id="shippingprice" />:
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              textAlign: "right",
              lineHeight: "30px",
            }}
          >
            <p>
              <b>{totalPrice} ₾</b>
            </p>
            <p>
              <b>{deliveryPrice} ₾</b>
            </p>
            <p>
              <b style={{ fontSize: "20px" }}>
                <span style={{ color: "#ff9900" }}>
                  {" "}
                  <FormattedMessage id="total" />:
                </span>{" "}
                {totalPrice + deliveryPrice} ₾
              </b>
            </p>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "1px solid #FF9900",
              backgroundColor: "#FF9900",
              color: "white",
              padding: "12px 100px",
              margin: "30px 0px",
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
            <FormattedMessage id="buy" />
          </button>
        </div>
      </div>
    </div>
  );
}

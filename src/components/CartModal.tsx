import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CartButtonsWrapper,
  CartCount,
  CartProductDesc,
  CartProductImage,
  CartProductInfo,
  CartProductPrice,
  CartProductRow,
  CartProductTitle,
} from "./CartModal.styled";
import { ICartProduct } from "../view/layouts/Navigation/shared/types";
import { calculateTotal } from "../utils/cartUtils";
import { FormattedMessage, useIntl } from "react-intl";

type CartModalProp = {
  onCancel: () => void;
  cartProducts: ICartProduct[];
  addToCart: (productId: string) => void;
  removeFromCart: (cartProductId: string, all: boolean) => void;
  getCartProducts: () => void;
};

export function CartModal({
  onCancel,
  cartProducts,
  addToCart,
  removeFromCart,
  getCartProducts,
}: CartModalProp) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    const { totalPrice, totalItems } = calculateTotal(cartProducts);
    setTotalPrice(totalPrice);
    setTotalItems(totalItems);
  }, [cartProducts]);

  const handlePurchase = () => {
    navigate("/purchases");
  };
  console.log(cartProducts);
  return (
    <Modal
      open={true}
      onCancel={onCancel}
      okText={formatMessage({ id: "buy" })}
      cancelText={formatMessage({ id: "cancel" })}
      okButtonProps={{
        style: {
          backgroundColor: "#FF9900",
          borderColor: "#FF9900",
          color: "#fff",
        },
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: "#fff",
          borderColor: "#FF9900",
          color: "#FF9900",
        },
      }}
      onOk={() => {
        handlePurchase();
        onCancel();
      }}
    >
      <div style={{ margin: "auto", color: "#FF9900" }}>
        <h1>
          <FormattedMessage id="cart" />
        </h1>
      </div>
      {cartProducts?.map((product: ICartProduct, index: number) => {
        return (
          <CartProductRow key={index}>
            <CartProductInfo>
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
                  <Button
                    style={{ marginRight: "5px" }}
                    onClick={() => removeFromCart(product.id, false)}
                  >
                    -
                  </Button>
                  <CartCount>
                    {product.count}{" "}
                    <span>
                      {" "}
                      <FormattedMessage id="item" />
                    </span>
                  </CartCount>
                  <Button
                    style={{ marginLeft: "5px", marginRight: "3px" }}
                    onClick={() => addToCart(product.cartProduct.id)}
                  >
                    +
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#FF9900",
                      color: "#fff",
                      border: "1px solid #FF9900",
                    }}
                    onClick={() => removeFromCart(product.id, true)}
                  >
                    <FormattedMessage id="delete" />
                  </Button>
                </CartButtonsWrapper>
              </CartProductDesc>
            </CartProductInfo>
          </CartProductRow>
        );
      })}
      <div>
        <div
          className="SPrice"
          style={{ fontWeight: "bold", color: "#FF9900" }}
        >
          <FormattedMessage id="productprice" />: {totalPrice} ₾
        </div>
        <div
          className="SPrice"
          style={{ fontWeight: "bold", color: "#FF9900" }}
        >
          <FormattedMessage id="productitem" />: {totalItems}{" "}
          <FormattedMessage id="item" />
        </div>
      </div>
    </Modal>
  );
}

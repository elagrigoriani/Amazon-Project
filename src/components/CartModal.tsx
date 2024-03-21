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

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts) {
      let total = 0;
      let items = 0;
      cartProducts.forEach((product) => {
        total += product.count * product.cartProduct.price;
        items += product.count;
      });
      setTotalPrice(total);
      setTotalItems(items);
    }
  }, [cartProducts]);

  const handlePurchase = () => {
    navigate("/purchases");
  };
  console.log(cartProducts);
  return (
    <Modal
      open={true}
      onCancel={onCancel}
      okText="ყიდვა"
      cancelText="გაუქმება"
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
      onOk={handlePurchase}
    >
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
                  {product.cartProduct.price} <span> ₾ </span>
                </CartProductPrice>
                <CartButtonsWrapper>
                  <Button
                    style={{ marginRight: "5px" }}
                    onClick={() => removeFromCart(product.id, false)}
                  >
                    -
                  </Button>
                  <CartCount>
                    {product.count} <span> ცალი </span>
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
                    წაშლა
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
          პროდუქტების ჯამური ღირებულება: {totalPrice} ₾
        </div>
        <div
          className="SPrice"
          style={{ fontWeight: "bold", color: "#FF9900" }}
        >
          პროდუქტების ჯამური რაოდენობა: {totalItems} ცალი
        </div>
      </div>
    </Modal>
  );
}

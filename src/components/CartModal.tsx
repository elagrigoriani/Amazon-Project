import { Button, Modal } from "antd";
import { useEffect } from "react";
import {
  CartButtonsWrapper,
  CartCount,
  CartProductCount,
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
  useEffect(() => {
    getCartProducts();
  }, []);

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
    >
      {cartProducts?.map((product: ICartProduct, index: number) => {
        return (
          <div>
            <CartProductRow key={index}>
              <CartProductInfo>
                <CartProductImage>
                  <img src={product.cartProduct.image} />
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
          </div>
        );
      })}
    </Modal>
  );
}

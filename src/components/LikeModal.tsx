import { ILikeProduct } from "../view/layouts/Navigation/shared/types";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

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

type LikeModalProp = {
  onCancel: () => void;
  likeProducts: ILikeProduct[];
  addToLike: (productId: string) => void;
  removeFromLike: (cartProductId: string, all: boolean) => void;
  getLikeProducts: () => void;
};
export function LikeModal({
  onCancel,
  likeProducts,
  addToLike,
  removeFromLike,
  getLikeProducts,
}: LikeModalProp) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    getLikeProducts();
  }, []);

  useEffect(() => {
    if (likeProducts) {
      let total = 0;
      let items = 0;
      likeProducts.forEach((product) => {
        if (product.likedProduct) {
          total += product.count * product.likedProduct.price;
          items += product.count;
        }
      });
      setTotalPrice(total);
      setTotalItems(items);
    }
  }, [likeProducts]);

  return (
    <Modal
      open={true}
      onCancel={onCancel}
      okText="OK"
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
      {likeProducts?.map((product: ILikeProduct, index: number) => {
        console.log("პროდუქტი", product);
        return (
          <CartProductRow key={index}>
            <CartProductInfo style={{ width: "100%" }}>
              {product.likedProduct && (
                <>
                  <CartProductImage>
                    <img
                      src={product.likedProduct.image}
                      alt={product.likedProduct.description}
                    />
                  </CartProductImage>
                  <CartProductDesc>
                    <CartProductTitle>
                      {product.likedProduct.description}
                    </CartProductTitle>
                    <CartProductPrice
                      style={{
                        padding: "5px",
                      }}
                    >
                      <div style={{ marginTop: "5px" }}>
                        {product.likedProduct.price} <span> ₾ </span>{" "}
                      </div>
                      <Button
                        style={{
                          backgroundColor: "#FF9900",
                          color: "#fff",
                          border: "1px solid #FF9900",
                          marginLeft: "10px",
                        }}
                        onClick={() => removeFromLike(product.id, true)}
                      >
                        წაშლა
                      </Button>
                    </CartProductPrice>
                  </CartProductDesc>
                </>
              )}
            </CartProductInfo>
          </CartProductRow>
        );
      })}
    </Modal>
  );
}

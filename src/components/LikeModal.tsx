import { ILikeProduct } from "../view/layouts/Navigation/shared/types";
import { useEffect } from "react";
import { Modal, Button } from "antd";
import { FormattedMessage, useIntl } from "react-intl";

import {
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
  const { formatMessage } = useIntl();

  useEffect(() => {
    getLikeProducts();
  }, []);

  useEffect(() => {
    getLikeProducts();
  }, []);

  return (
    <Modal
      open={true}
      onCancel={onCancel}
      okText="OK"
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
    >
      <div style={{ margin: "auto", color: "#FF9900" }}>
        <h1>
          {" "}
          <FormattedMessage id="likedproducts" />
        </h1>
      </div>
      {likeProducts?.map((product: ILikeProduct, index: number) => (
        <div key={index}>
          <CartProductRow>
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
                    <CartProductPrice style={{ padding: "5px" }}>
                      <div style={{ marginTop: "5px" }}>
                        {product.likedProduct.salePrice !== null ? (
                          <>
                            <span style={{ color: "black" }}>
                              <s>
                                {" "}
                                <b>{product.likedProduct.price} ₾ </b>
                              </s>
                            </span>
                            <span>
                              <span style={{ color: "red" }}>
                                <b>
                                  {" "}
                                  <FormattedMessage id="sale" />
                                </b>
                              </span>{" "}
                              <b>{product.likedProduct.salePrice} ₾</b>
                            </span>
                          </>
                        ) : (
                          <span style={{ marginBottom: "25px" }}>
                            <b>{product.likedProduct.price} ₾</b>
                          </span>
                        )}
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
                        <FormattedMessage id="delete" />
                      </Button>
                    </CartProductPrice>
                  </CartProductDesc>
                </>
              )}
            </CartProductInfo>
          </CartProductRow>
        </div>
      ))}
    </Modal>
  );
}

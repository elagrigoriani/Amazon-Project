import { Button, Card, Modal } from "antd";

type CartModalProp = {
  onCancel: () => void;
  cartProducts: any[];
  addToCart: (productId: string) => void;
  removeFromCart: (cartProductId: string, all: boolean) => void;
};

export function CartModal({
  onCancel,
  cartProducts,
  addToCart,
  removeFromCart,
}: CartModalProp) {
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
          backgroundColor: "#FF9900",
          borderColor: "#FF9900",
          color: "#fff",
        },
      }}
    >
      {cartProducts?.map((product: any) => {
        return (
          <Card
            title={`${product.cartProduct.title} ${product.image} ${product.count} ცალი`}
            extra={
              <>
                <Button onClick={() => removeFromCart(product.id, false)}>
                  -
                </Button>
                <Button onClick={() => addToCart(product.cartProduct.id)}>
                  +
                </Button>
                <Button onClick={() => removeFromCart(product.id, true)}>
                  წაშლა
                </Button>
              </>
            }
          >
            {product.descripion}
          </Card>
        );
      })}
    </Modal>
  );
}

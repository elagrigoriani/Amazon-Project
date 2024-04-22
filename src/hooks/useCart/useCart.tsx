import { useState } from "react";
import { privateAxios } from "../../utils/privateAxios";
import { ICartProduct } from "../../view/layouts/Navigation/shared/types";

export function useCart() {
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>();

  async function getCartProducts() {
    try {
      const resp = await privateAxios.get("/cart");
      setCartProducts(resp.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addToCart(productId: string) {
    try {
      await privateAxios.post("/cart", {
        product_id: productId,
      });
      await getCartProducts();
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromCart(cartProductId: string, all: boolean) {
    try {
      await privateAxios.delete(`/cart/${cartProductId}?removeAll=${all}`);
      await getCartProducts();
    } catch (error) {
      console.error(error);
    }
  }

  return {
    cartProducts,
    getCartProducts,
    addToCart,
    removeFromCart,
  };
}

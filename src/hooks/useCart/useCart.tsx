import { useEffect, useState } from "react";
import { privateAxios } from "../../utils/privateAxios";
import axios from "axios";

export function useCart() {
  const [cartProducts, setCartProducts] = useState();

  async function getCartProducts() {
    const resp = await privateAxios.get("/cart");
    setCartProducts(resp.data);
  }

  async function addToCart(productId: string) {
    try {
      await privateAxios.post("/cart", {
        product_id: productId,
      });
      await getCartProducts();
    } catch (error) {}
  }

  async function removeFromCart(cartProductId: string, all: boolean) {
    try {
      await privateAxios.delete(`/cart/${cartProductId}?removeAll=${all}`);
      await getCartProducts();
    } catch (error) {}
  }

  useEffect(() => {
    getCartProducts();
  }, []);

  return { cartProducts, getCartProducts, addToCart, removeFromCart };
}

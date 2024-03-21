import { useState } from "react";
import { privateAxios } from "../../utils/privateAxios";
import { ILikeProduct } from "../../view/layouts/Navigation/shared/types";

export function useLike() {
  const [likeProducts, setLikeProducts] = useState<ILikeProduct>();

  async function getLikeProducts() {
    const resp = await privateAxios.get("/liked-products");
    setLikeProducts(resp.data);
  }

  async function addToLike(productId: string) {
    try {
      await privateAxios.post("/liked-products", {
        product_id: productId,
      });
      await getLikeProducts();
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromLike(likeProductId: string, all: boolean) {
    try {
      await privateAxios.delete(
        `/liked-products/${likeProductId}?removeAll=${all}`
      );
      await getLikeProducts();
    } catch (error) {
      console.error(error);
    }
  }

  return { likeProducts, getLikeProducts, addToLike, removeFromLike };
}

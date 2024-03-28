export function calculateTotal(cartProducts: any[]) {
  let totalPrice = 0;
  let totalItems = 0;

  if (cartProducts) {
    cartProducts.forEach((product) => {
      const price =
        product.cartProduct.salePrice !== null
          ? product.cartProduct.salePrice
          : product.cartProduct.price;
      totalPrice += product.count * price;
      totalItems += product.count;
    });
  }

  return { totalPrice, totalItems };
}

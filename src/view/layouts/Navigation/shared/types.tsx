export type ICategories = {
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
};

export type IProducts = {
  id: string;
  title: string;
  category_name: string;
  description: string;
  image: string;
  salePrice: null;
  price: number;
};

export type ICartProduct = {
  cartProduct: IProducts;
  count: number;
  created_at: string;
  id: string;
  product_id: string;
  updated_at: string;
  user_id: string;
};

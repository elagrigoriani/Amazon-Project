import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../../shared/types";
import { useCart } from "../../../../../hooks/useCart";

import {
  SSmartphone,
  SWrapper,
  PaginationWrapper,
  PaginationButton,
  PaginationNumber,
  LikeButton,
} from ".././Smartphone/SSmartphone.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLike } from "../../../../../hooks/useLike";

export function Laptop() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { cartProducts, addToCart } = useCart();
  const { likeProducts, addToLike } = useLike();
  console.log(cartProducts, likeProducts);
  const itemsPerPage = 12;

  async function getProducts(categoryName: string) {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product?categoryName=${encodeURIComponent(
          categoryName
        )}&pageSize=130`
      );
      if (Array.isArray(resp.data.products)) {
        setProducts(resp.data.products);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    getProducts("ლეპტოპები");
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <SWrapper>
        {products
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((product: IProducts) => (
            <SSmartphone key={product.id}>
              <img src={product.image} alt={product.title} />
              {product.salePrice !== null ? (
                <>
                  <span style={{ color: "black" }}>
                    <s>{product.price} ₾</s>
                  </span>
                  <span>
                    <span style={{ color: "red" }}>Sale</span>{" "}
                    {product.salePrice} ₾
                  </span>
                </>
              ) : (
                <span>{product.price} ₾</span>
              )}
              <p>{product.description}</p>
              <div style={{ display: "flex" }}>
                <div>
                  <button onClick={() => addToCart(product.id)}>
                    კალათაში დამატება
                  </button>{" "}
                </div>
                <div>
                  <LikeButton onClick={() => addToLike(product.id)}>
                    {
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#ff9900" }}
                      />
                    }
                  </LikeButton>
                </div>
              </div>
            </SSmartphone>
          ))}
      </SWrapper>

      <PaginationWrapper>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          {"<<"}
        </PaginationButton>
        {getPageNumbers().map((number) => (
          <PaginationNumber
            key={number}
            onClick={() => goToPage(number)}
            $active={number === currentPage}
          >
            {number}
          </PaginationNumber>
        ))}
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </PaginationButton>
      </PaginationWrapper>
    </>
  );
}

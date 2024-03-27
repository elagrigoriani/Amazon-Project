import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../../shared/types";
import { useCart } from "../../../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  SSmartphone,
  SWrapper,
  PaginationWrapper,
  PaginationButton,
  PaginationNumber,
  LikeButton,
} from ".././Smartphone/SSmartphone.styled";
import { useLike } from "../../../../../hooks/useLike";

export function Smartphone() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { cartProducts, addToCart } = useCart();
  const { likeProducts, addToLike } = useLike();
  console.log(cartProducts, likeProducts);
  const itemsPerPage = 12;
  const [sortBy, setSortBy] = useState<"lowestToHighest" | "highestToLowest">(
    "lowestToHighest"
  );

  useEffect(() => {
    getProducts("სმარტფონები");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "lowestToHighest") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

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

  const handleSortChange = (value: "lowestToHighest" | "highestToLowest") => {
    setSortBy(value);
  };

  return (
    <>
      <div>
        <label style={{ margin: "5px" }}>
          ფილტრი ფასის მიხედვით
          <select
            style={{
              padding: "5px",
              color: "#ff9900",
              marginLeft: "5px",
              marginTop: "5px",
              border: "1px solid #ff9900",
            }}
            value={sortBy}
            onChange={(e) =>
              handleSortChange(
                e.target.value as "lowestToHighest" | "highestToLowest"
              )
            }
          >
            <option value="lowestToHighest" className="custom-option">
              ზრდადობით დალაგება
            </option>
            <option value="highestToLowest" className="custom-option">
              კლებადობით დალაგება
            </option>
          </select>
        </label>
      </div>

      <SWrapper>
        {sortedProducts
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
                    <span style={{ color: "red" }}>ფასდაკლება</span>{" "}
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

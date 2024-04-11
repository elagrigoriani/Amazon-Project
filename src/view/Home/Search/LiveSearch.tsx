import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../../layouts/Navigation/shared/types";
import { useNavigate } from "react-router-dom";
import { SSearch, SSearchProducts } from "./LiveSearch.styled";
import { FormattedMessage, useIntl } from "react-intl";

export function LiveSearch() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  const [scrollable, setScrollable] = useState(false);
  const [showScrollContainer, setShowScrollContainer] = useState(true);

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  const handlePurchase = (productId: string) => {
    navigate(`/productpage/${productId}`);
    window.scrollTo(0, 0);
    setShowScrollContainer(false);
  };

  async function getProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3000/product?&pageSize=130`
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

  const filteredProducts = products.filter((product: IProducts) =>
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setScrollable(filteredProducts.length > 5);
  }, [filteredProducts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowScrollContainer(true); // Set showScrollContainer to true when input value changes
  };

  return (
    <SSearch>
      <input
        type="text"
        placeholder={formatMessage({ id: "search.placeholder" })}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm !== "" && showScrollContainer && (
        <div
          className="scroll-container"
          style={{
            backgroundColor: "white",
            position: "absolute",
            zIndex: "3",
            width: "56.7%",
            padding: "5px",
            borderRadius: "5px",
            marginTop: "5px",
            border: "1px solid lightgray",
            overflowY: scrollable ? "scroll" : "hidden",
            maxHeight: scrollable ? "300px" : "auto",
          }}
        >
          {filteredProducts.map((product: IProducts) => (
            <SSearchProducts
              onClick={() => handlePurchase(product.id)}
              key={product.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <img
                  src={product.image}
                  alt="img"
                  style={{
                    width: "35px",
                    marginTop: "5px",
                    display: "flex",
                    marginRight: "5px",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{product.description}</div>
                <div>
                  {product.salePrice ? (
                    <>
                      <span style={{ color: "black" }}>
                        <s>{product.price} ₾</s>
                      </span>
                      <span style={{ color: "red" }}>
                        {" "}
                        <FormattedMessage id="sale" />
                      </span>{" "}
                      {product.salePrice} ₾
                    </>
                  ) : (
                    <div>{product.price} ₾</div>
                  )}
                </div>
              </div>
            </SSearchProducts>
          ))}
        </div>
      )}
    </SSearch>
  );
}

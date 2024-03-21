import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../images/logo.png";
import cartImage from "../../../images/cart.png";

import { SLayoutHeader } from "./SLayoutHeader.styled";

import { SignInModal } from "../../../modules/SignInModal";
import { SignUpModal } from "../../../modules/SignUpModal";
import { useAuthProvider } from "../../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "../../../provider/AuthProvider/AuthContext";
import { composeAvatarName } from "../../../utils/composeAvatarName";
import { Search } from "../../Home/Search/Search";
import { Navigation } from "../Navigation";
import { CartModal } from "../../../components/CartModal";
import { useCart } from "../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLike } from "../../../hooks/useLike";
import { Avatar, Button, ConfigProvider, Popover, Space } from "antd";
import { LikeModal } from "../../../components/LikeModal";

export function LayoutHeader() {
  const { authStage, userData, logout } = useAuthProvider();
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showLikeModal, setShowLikeModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { cartProducts, addToCart, removeFromCart, getCartProducts } =
    useCart();
  const { likeProducts, addToLike, removeFromLike, getLikeProducts } =
    useLike();

  return (
    <div>
      <SLayoutHeader>
        <a href="/">
          <img src={Logo} alt="ლოგო" />
        </a>

        <Search />
        {showCartModal && (
          <CartModal
            cartProducts={cartProducts as any}
            onCancel={() => setShowCartModal(false)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            getCartProducts={getCartProducts}
          />
        )}
        <button
          className="cart-button"
          onClick={() => setShowCartModal(true)}
          style={{ cursor: "pointer" }}
        >
          <img src={cartImage} alt="img" />
        </button>
        <button
          className="cart-button"
          onClick={() => setShowLikeModal(true)}
          style={{
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: "white",
              padding: "8px",
            }}
          />
        </button>
        <Space>
          {authStage === TAuthorizationStage_Enum.AUTHORIZED ? (
            <div>
              <Popover
                content={
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#FF9900",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        onClick={() => navigate("/orders")}
                        style={{ marginBottom: "5px" }}
                      >
                        შეკვეთები
                      </Button>

                      <Button
                        onClick={() => navigate("/profile")}
                        style={{ marginBottom: "5px" }}
                      >
                        პროფილი
                      </Button>
                      <Button type="primary" onClick={logout}>
                        გამოსვლა
                      </Button>
                    </div>
                  </ConfigProvider>
                }
              >
                <Avatar style={{ border: "1px solid #FF9900" }}>
                  {composeAvatarName(userData?.first_name, userData?.last_name)}
                </Avatar>
              </Popover>
            </div>
          ) : (
            <div>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FF9900",
                  },
                }}
              >
                <Button type="primary" onClick={() => setShowSignIn(true)}>
                  შესვლა
                </Button>
                <Button
                  onClick={() => setShowSignUp(true)}
                  style={{ marginLeft: "8px" }}
                >
                  რეგისტრაცია
                </Button>
              </ConfigProvider>
            </div>
          )}
        </Space>
        {showSignIn && <SignInModal onCancel={() => setShowSignIn(false)} />}
        {showSignUp && <SignUpModal onCancel={() => setShowSignUp(false)} />}
      </SLayoutHeader>
      {showLikeModal && (
        <LikeModal
          likeProducts={likeProducts as any}
          onCancel={() => setShowLikeModal(false)}
          addToLike={addToLike}
          removeFromLike={removeFromLike}
          getLikeProducts={getLikeProducts}
        />
      )}
      <Navigation />
    </div>
  );
}

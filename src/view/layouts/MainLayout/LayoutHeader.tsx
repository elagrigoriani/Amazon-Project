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
import { useContext } from "react";
import { LocaleContext } from "../../../provider/LocaleProvider/LocaleContext";
import { FormattedMessage, useIntl } from "react-intl";

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
  const { formatMessage } = useIntl();
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <div>
      <SLayoutHeader>
        <div
          style={{
            padding: "5px",
            marginTop: "5px",
          }}
        >
          <a href="/">
            <img src={Logo} alt="ლოგო" />
          </a>
        </div>
        <div style={{ width: "65%" }}>
          {" "}
          <Search />
        </div>
        <div>
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
            style={{
              cursor: "pointer",
              marginRight: "30px",
              marginTop: "2px",
            }}
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
        </div>
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
                        onClick={() => {
                          navigate("/orders");
                          toggleLocale();
                        }}
                        style={{ marginBottom: "5px" }}
                      >
                        <FormattedMessage id="orders" />
                      </Button>

                      <Button
                        onClick={() => {
                          navigate("/profile");
                          toggleLocale();
                        }}
                        style={{ marginBottom: "5px" }}
                      >
                        <FormattedMessage id="profile" />
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
                <Button
                  type="primary"
                  onClick={() => {
                    setShowSignIn(true);
                    toggleLocale();
                  }}
                >
                  <FormattedMessage id="logIn" />
                </Button>
                <Button
                  onClick={() => {
                    setShowSignUp(true);
                    toggleLocale();
                  }}
                  style={{ marginLeft: "8px" }}
                >
                  <FormattedMessage id="registration" />
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

import { Avatar, Button, ConfigProvider, Space, Popover } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../images/logo.png";

import { SLayoutHeader } from "./SLayoutHeader.styled";

import { SignInModal } from "../../../modules/SignInModal";
import { SignUpModal } from "../../../modules/SignUpModal";
import { useAuthProvider } from "../../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "../../../provider/AuthProvider/AuthContext";
import { composeAvatarName } from "../../../utils/composeAvatarName";
import { Search } from "../../Home/Search/Search";
import { Navigation } from "../Navigation";

export function LayoutHeader() {
  const { authStage, userData, logout } = useAuthProvider();

  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  return (
    <div>
      <SLayoutHeader>
        <img src={Logo} alt="ლოგო" />

        <Search />

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
      <Navigation />
    </div>
  );
}

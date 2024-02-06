import { PropsWithChildren, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { AuthContext, TAuthorizationStage_Enum } from "./AuthContext";
import { TAuthRequest, TUserRequest } from "../../@types/requestTypes";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../config/localStorageKeys";
import { setPrivateAccessToken } from "../../utils/privateAxios";
import { publicAxios } from "../../utils/publicAxios";

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<TUserRequest>();
  const [authStage, setAuthStage] = useState<TAuthorizationStage_Enum>(
    TAuthorizationStage_Enum.UNAUTHORIZED
  );

  function setAuthData(tokens: TAuthRequest) {
    const tokenData: TUserRequest = jwtDecode(tokens.access_token);
    setUserData(tokenData);
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStage(TAuthorizationStage_Enum.AUTHORIZED);
  }

  async function getNewAccessToken(refreshToken: string) {
    try {
      const response = await publicAxios.post<TAuthRequest>(
        "/auth/update-tokens",
        { refresh_token: refreshToken }
      );
      setAuthData(response.data);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setUserData(undefined);
    setAuthStage(TAuthorizationStage_Enum.UNAUTHORIZED);
    setPrivateAccessToken("");
  }

  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if (refreshToken) getNewAccessToken(refreshToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        authStage,
        logout,
        setAuthStage,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

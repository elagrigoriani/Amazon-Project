import React, { createContext } from "react";
import { TAuthRequest, TUserRequest } from "../../@types/requestTypes";

export enum TAuthorizationStage_Enum {
  UNAUTHORIZED = "unauthorized",
  AUTHORIZED = "authorized",
}

type AuthContextValue = {
  userData?: TUserRequest;
  authStage: TAuthorizationStage_Enum;
  logout: () => void;
  setAuthData: (e: TAuthRequest) => void;
  setAuthStage: React.Dispatch<React.SetStateAction<TAuthorizationStage_Enum>>;
};

export const AuthContext = createContext<AuthContextValue>({
  authStage: TAuthorizationStage_Enum.UNAUTHORIZED,
  setAuthData: () => {},
  userData: undefined,
  setAuthStage: () => {},
  logout: () => {},
});

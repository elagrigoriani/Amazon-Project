import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthorizationStage_Enum } from "../../provider/AuthProvider/AuthContext";

export function PrivateChild({ children }: PropsWithChildren) {
  const { authStage } = useAuthProvider();

  return authStage === TAuthorizationStage_Enum.AUTHORIZED ? (
    children
  ) : (
    <Navigate to="/ " />
  );
}

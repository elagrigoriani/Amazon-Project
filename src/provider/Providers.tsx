import { PropsWithChildren } from "react";
import { AuthProvider } from "./AuthProvider/AuthProvider";

export function Providers({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

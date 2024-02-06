import { useAuthProvider } from "../../provider/AuthProvider";

export function Home() {
  const { userData } = useAuthProvider();
  return <div>{userData?.first_name || ""}</div>;
}

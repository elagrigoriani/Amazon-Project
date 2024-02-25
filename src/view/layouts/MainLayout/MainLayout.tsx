import { Outlet } from "react-router-dom";
import { LayoutHeader } from "./LayoutHeader";

export function MainLayout() {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
    </div>
  );
}

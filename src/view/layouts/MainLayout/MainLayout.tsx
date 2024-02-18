import { Outlet } from "react-router-dom";
import { LayoutHeader } from "./LayoutHeader";
import { CarouselFunc } from "../Carousel";

export function MainLayout() {
  return (
    <div>
      <LayoutHeader />
      <Outlet />
      <CarouselFunc />
    </div>
  );
}

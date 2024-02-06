import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Home/Orders";
import { MainLayout } from "./view/layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

import { PrivateChild } from "./modules/PrivateRoute";
import { Navigation } from "./view/layouts/Navigation";
import { CarouselFunc } from "./view/layouts/Carousel";
import { PrevFooter } from "./view/layouts/Footer/PrevFooter";
import { Footer } from "./view/layouts/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<PrivateChild children={<Profile />} />}
          />
          <Route
            path="/orders"
            element={<PrivateChild children={<Orders />} />}
          />
        </Route>
      </Routes>
      <Navigation />
      <CarouselFunc />
      <PrevFooter />
      <Footer />
    </>
  );
}

export default App;

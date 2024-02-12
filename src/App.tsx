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
import { Smartphone } from "./view/layouts/Navigation/Pages/Smartphone";
import { Laptop } from "./view/layouts/Navigation/Pages/Laptop";
import { Audio } from "./view/layouts/Navigation/Pages/Audio";
import { Photo } from "./view/layouts/Navigation/Pages/Photo";
import { Gaming } from "./view/layouts/Navigation/Pages/Gaming";
import { TV } from "./view/layouts/Navigation/Pages/TV";
import { Tab } from "./view/layouts/Navigation/Pages/Tab";

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
      {/* <Routes>
        <Route element={<Navigation />}>
          <Route path="/smartphone" element={<Smartphone />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/tab" element={<Tab />} />
        </Route>
      </Routes> */}
      <CarouselFunc />
      <PrevFooter />
      <Footer />
    </>
  );
}

export default App;

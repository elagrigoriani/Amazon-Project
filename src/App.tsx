import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Home/Orders";
import { MainLayout } from "./view/layouts/MainLayout";
import { Routes, Route, useLocation } from "react-router-dom";

import { PrivateChild } from "./modules/PrivateRoute";
import { PrevFooter } from "./view/layouts/Footer/PrevFooter";
import { Footer } from "./view/layouts/Footer/Footer";
import { CarouselFunc } from "./view/layouts/Carousel/CarouselFunc";
import { Smartphone } from "./view/layouts/Navigation/Pages/Smartphone";
import { Laptop } from "./view/layouts/Navigation/Pages/Laptop";
import { Photo } from "./view/layouts/Navigation/Pages/Photo";
import { Tab } from "./view/layouts/Navigation/Pages/Tab";
import { TV } from "./view/layouts/Navigation/Pages/TV";
import { Gaming } from "./view/layouts/Navigation/Pages/Gaming";
import { Audio } from "./view/layouts/Navigation/Pages/Audio";
import { SearchResults } from "./view/Home/Search/SearchResults";
import { CheckOut } from "./components/CheckOut";
import { ProductPage } from "./view/layouts/Navigation/Pages/ProductPage";
import { CreditCard } from "./components/CreditCard";

function App() {
  const location = useLocation();
  const showCarousel = location.pathname === "/";

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
          <Route path="/სმარტფონები" element={<Smartphone />} />
          <Route path="/ლეპტოპები" element={<Laptop />} />
          <Route path="/აუდიო" element={<Audio />} />
          <Route path="/ფოტო | ვიდეო" element={<Photo />} />
          <Route path="/გეიმინგი" element={<Gaming />} />
          <Route path="/TV | მონიტორები" element={<TV />} />
          <Route path="/ტაბები" element={<Tab />} />
          <Route path="/" element={<SearchResults />} />
          <Route path="/purchases" element={<CheckOut />} />
          <Route path="/productpage/:productId" element={<ProductPage />} />
          <Route path="/creditcard" element={<CreditCard />} />
        </Route>
      </Routes>

      {showCarousel && <CarouselFunc />}
      <PrevFooter />
      <Footer />
    </>
  );
}

export default App;

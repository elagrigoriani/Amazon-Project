import React, { useState, useEffect, useContext } from "react"; // Импорт useEffect и useState
import { Routes, Route, useLocation } from "react-router-dom";
import { LocaleContext } from "./provider/LocaleProvider/LocaleContext";
import { MainLayout } from "./view/layouts/MainLayout";
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
import { CheckOut } from "./components/CheckOut";
import { ProductPage } from "./view/layouts/Navigation/Pages/ProductPage";
import { CreditCard } from "./components/CreditCard";
import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Home/Orders";
import { useIntl } from "react-intl";

function App() {
  const location = useLocation();
  const showCarousel = location.pathname === "/";
  const { locale } = useContext(LocaleContext);
  const { formatMessage } = useIntl();

  console.log(locale);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? "var(--dark-background-color)"
      : "var(--light-background-color)";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

          <Route path="/Smartphones" element={<Smartphone />} />
          <Route path="/Laptops" element={<Laptop />} />
          <Route path="/Audio" element={<Audio />} />
          <Route path="/Photo|Video" element={<Photo />} />
          <Route path="/Gaming" element={<Gaming />} />
          <Route path="/TV|Monitors" element={<TV />} />
          <Route path="/Tabs" element={<Tab />} />

          <Route path="/purchases" element={<CheckOut />} />
          <Route path="/productpage/:productId" element={<ProductPage />} />
          <Route path="/creditcard" element={<CreditCard />} />
        </Route>
      </Routes>

      <button
        onClick={toggleDarkMode}
        style={{ color: "#FF9900", margin: "5px" }}
      >
        {darkMode
          ? formatMessage({ id: "light" })
          : formatMessage({ id: "dark" })}
      </button>

      {showCarousel && <CarouselFunc />}
      <PrevFooter />
      <Footer />
    </>
  );
}

export default App;

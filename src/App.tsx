import { Home } from "./view/Home";
import { Profile } from "./view/Profile";
import { Orders } from "./view/Home/Orders";
import { MainLayout } from "./view/layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

import { PrivateChild } from "./modules/PrivateRoute";
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

      <PrevFooter />
      <Footer />
    </>
  );
}

export default App;

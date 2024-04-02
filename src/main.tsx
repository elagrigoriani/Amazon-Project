// index.tsx
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles.styled.tsx";
import { Providers } from "./provider/Providers.tsx";
import LocaleProvider from "./provider/LocaleProvider/LocaleProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Providers>
      <GlobalStyles />
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </Providers>
  </BrowserRouter>
);

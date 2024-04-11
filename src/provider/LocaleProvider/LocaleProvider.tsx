import { IntlProvider } from "react-intl";
import { PropsWithChildren, useState, useEffect } from "react";
import { LocaleContext, Locale_Enum } from "./LocaleContext";

import en from "./translations/en.json";
import ka from "./translations/ka.json";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale_Enum>(Locale_Enum.EN);

  const languages = { en, ka };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) setLocale(language as Locale_Enum);
  }, []);

  function toggleLocale() {
    if (locale === Locale_Enum.KA) {
      setLocale(Locale_Enum.EN);
      localStorage.setItem("language", Locale_Enum.EN);
    } else if (locale === Locale_Enum.EN) {
      setLocale(Locale_Enum.KA);
      localStorage.setItem("language", Locale_Enum.KA);
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      <IntlProvider
        messages={languages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;

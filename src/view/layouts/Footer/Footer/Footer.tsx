import {
  SFooter,
  SContent,
  SLink,
  SBackground,
  SSocial,
  SSocialIcons,
  SLanguage,
} from "./SFooter.styled";
import Facebook from "../../../../images/facebook.png";
import Instagram from "../../../../images/instagram.png";
import Youtube from "../../../../images/youtube.png";
import Twitter from "../../../../images/twitter.png";
import Tiktok from "../../../../images/tiktok.png";
import Language from "../../../../images/language.png";
import { useContext } from "react";
import { LocaleContext } from "../../../../provider/LocaleProvider/LocaleContext";
import { FormattedMessage, useIntl } from "react-intl";

export function Footer() {
  const { formatMessage } = useIntl();
  const { toggleLocale } = useContext(LocaleContext);
  return (
    <SBackground>
      <SFooter>
        <SContent>
          <SLink>
            <a href="#">
              <h4>Amazon Music</h4>Stream millions of songs
            </a>
            <a href="#">
              <h4>AmazonGlobal </h4>Ship Orders Internationally
            </a>
            <a href="#">
              <h4>IMDbPro </h4>Get Info Entertainment Professionals Need
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>Amazon Ads</h4>Reach customers wherever they spend their time
            </a>
            <a href="#">
              <h4> Home Services </h4>Experienced Pros Happiness Guarantee
            </a>
            <a href="#">
              <h4>Kindle Direct Publishing </h4>Indie Digital & Print Publishing
              Made Easy
            </a>
            <a href="#">
              <h4>eero WiFi </h4>Stream 4K Video in Every Room
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>6pm</h4>Score deals on fashion brands
            </a>
            <a href="#">
              <h4> Amazon Web Services </h4>Scalable Cloud Computing Services
            </a>
            <a href="#">
              <h4> Prime Video Direct</h4>Video Distribution Made Easy
            </a>
            <a href="#">
              <h4>Blink </h4>Smart Security for Every Home
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>AbeBooks</h4>Books, art & collectibles
            </a>
            <a href="#">
              <h4> Audible</h4>Listen to Books & Original Audio Performances
            </a>
            <a href="#">
              <h4>Shopbop</h4>Designer Fashion Brands
            </a>
            <a href="#">
              <h4> Neighbors App </h4>Real-Time Crime & Safety Alerts
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>ACX</h4>Audiobook Publishing Made Easy
            </a>
            <a href="#">
              <h4> Box Office Mojo</h4>Find Movie Box Office Data
            </a>
            <a href="#">
              <h4>Woot!</h4>Deals and Shenanigans
            </a>
            <a href="#">
              <h4> Amazon Subscription Boxes </h4>Top subscription boxes – right
              to your door Alerts
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>Sell on Amazon</h4> Start a Selling Account
            </a>
            <a href="#">
              <h4> Goodreads</h4>Book reviews & recommendations
            </a>
            <a href="#">
              <h4>Zappos</h4>Shoes & Clothing
            </a>
            <a href="#">
              <h4> PillPack </h4>Pharmacy Simplified
            </a>
          </SLink>
        </SContent>

        <SContent>
          <SLink>
            <a href="#">
              <h4>Amazon Business</h4> Everything For Your Business
            </a>
            <a href="#">
              <h4> IMDb</h4>Movies, TV & Celebrities
            </a>
            <a href="#">
              <h4>Ring</h4>Smart Home Security Systems
            </a>
          </SLink>
        </SContent>
      </SFooter>
      <SSocial>
        <SSocialIcons>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
        </SSocialIcons>
        <SSocialIcons>
          <a href="https://www.instgram.com/" target="_blank">
            <img src={Instagram} alt="instagram" />
          </a>
        </SSocialIcons>
        <SSocialIcons>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={Youtube} alt="youtube" />
          </a>
        </SSocialIcons>
        <SSocialIcons>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={Twitter} alt="twitter" />
          </a>
        </SSocialIcons>
        <SSocialIcons>
          <a href="https://www.tiktok.com/" target="_blank">
            <img src={Tiktok} alt="tiktok" />
          </a>
        </SSocialIcons>
      </SSocial>
      <SLanguage>
        <SSocial style={{ border: "none" }}>
          <img
            src={Language}
            alt="language"
            style={{
              width: "24px",
              height: "24px",
              marginTop: "3px",
              marginRight: "5px",
            }}
          />
          <button onClick={() => toggleLocale()}>
            <FormattedMessage id="change.language" />
          </button>
        </SSocial>
      </SLanguage>
    </SBackground>
  );
}

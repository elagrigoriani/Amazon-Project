import {
  SPrevFooter,
  SContent,
  SLink,
  SBackground,
} from "./SPrevFooter.styled";

export function PrevFooter() {
  return (
    <SBackground>
      <SPrevFooter>
        <SContent>
          <h4>Get to Know Us</h4>
          <SLink>
            <a href="#">Careers</a>
            <a href="#">About Amazon</a>
            <a href="#">Invesrot Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </SLink>
        </SContent>
        <SContent>
          <h4>Make Money with Us</h4>
          <SLink>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell on Amazon Business</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            <a href="#">Host an Amazon Hub</a>
            <a href="#">›See More Make Money with Us</a>
            <a href="#">Amazon Science</a>
          </SLink>
        </SContent>
        <SContent>
          <h4>Amazon Payment Products</h4>
          <SLink>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
            <a href="#">Amazon Science</a>
          </SLink>
        </SContent>
        <SContent>
          <h4>Let Us Help You</h4>
          <SLink>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
            <a href="#">Amazon Assistant</a>
            <a href="#">Help</a>
          </SLink>
        </SContent>
      </SPrevFooter>
    </SBackground>
  );
}

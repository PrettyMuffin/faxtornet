import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";

import logo from "../assets/images/Logo.png";
import qrCode from "../assets/images/qr.png";

function Footer() {
  return (
    <footer>
      <Logo />
      <Navigazione />
      <Contatta />
    </footer>
  );
}

export default Footer;

function Logo() {
  const iconSize = "40px";

  const FACEBOOK_LINK = "https://www.facebook.com/Faxtornet";
  const INSTAGRAM_LINK = "https://www.instagram.com/faxtornet/";
  const GOOGLE_MAPS_LINK =
    "https://www.google.it/maps/place/Faxtornet+-+Computer+Clinic+-/@45.7853822,12.0002784,17z/data=!3m1!4b1!4m6!3m5!1s0x477924219a6c5453:0x9294244ddeb621e7!8m2!3d45.7853822!4d12.0028533!16s%2Fg%2F11bx1cs0zf?entry=ttu";

  return (
    <section className="footer-logo">
      <img src={logo} alt="" />
      <ul className="social-links">
        <li>
          <a href={FACEBOOK_LINK} target="blank">
            <BiLogoFacebook size={iconSize} className={"icon"} />
          </a>
        </li>
        <li>
          <a href={INSTAGRAM_LINK} target="blanck">
            <BiLogoInstagram size={iconSize} className={"icon"} />
          </a>
        </li>
        <li>
          <a href={GOOGLE_MAPS_LINK} target="blanck">
            <SiGooglemaps size={iconSize} className={"icon"} />
          </a>
        </li>
      </ul>
    </section>
  );
}

function Navigazione() {
  //TODO: In base alla pagina in cui ci troviamo, mostrare navigazione o meno
  return <div></div>;
}

function Contatta() {
  const annoOdierno = new Date().getFullYear();

  return (
    <section className="footer-contatta">
      <div className="qr-container">
        <img src={qrCode} alt="" />
        <p>Scannerizza per chattare subito con noi</p>
      </div>
      <p id="copyright">&copy; {annoOdierno} Faxtornet - Computer Clinic</p>
    </section>
  );
}

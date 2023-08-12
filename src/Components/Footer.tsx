//* Librerie
import { useContext } from "react";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";

//* Dipendenze
import { CurrentPageContext } from "../App";
import { ElementoNavigazione } from "../Models";
import { homeLinks, infoLinks } from "../Data";

//* Immagini
import qrCode from "../assets/images/qr.png";
import logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="items-wrapper">
        <Logo />
        <Navigazione />
        <Contatta />
      </div>
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
  const { currentPage } = useContext(CurrentPageContext);

  const elementiNavigazione: ElementoNavigazione[] =
    currentPage === "home" ? homeLinks : infoLinks;

  return currentPage === "home" || currentPage === "info" ? (
    <section className="footer-navigazione">
      <h1>Naviga</h1>
      <ul className="link-sezioni">
        {elementiNavigazione.map((el) => {
          return (
            <li>
              <a href={`#${el.idRef}`}>{el.displayString}</a>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    ""
  );
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

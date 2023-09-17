import { FaWhatsapp } from "react-icons/fa";

import video from "../../../assets/video/riparazioneMac.mp4";

function Presentazione() {
  return (
    <section className="presentazione-sect" id="presentazione">
      <video autoPlay muted loop src={video} />
      <Descrizione />
    </section>
  );
}

export default Presentazione;

function Descrizione() {
  return (
    <section className="description">
      <div className="trattino"></div>
      <h1>Riparazioni e assistenza professionali su qualunque computer</h1>
      <p>
        Benvenuti a Faxtornet - Dove l’innovazione incontra l’esperienza.
        Benvenuto nel futuro, al sicuro nelle mani di esperti.
      </p>
      <section className="bottoni">
        <a className="link" href="#servizi">
          Servizi
        </a>
        <WhatsappButton />
      </section>
    </section>
  );
}

export function WhatsappButton() {
  const WHATSAPP_LINK = "https://wa.me/message/JSWGP4IQ5LVWM1?src=qr";
  return (
    <a className="whatsapp-button" href={WHATSAPP_LINK}>
      <span className="whatsapp-btn-logo">
        <FaWhatsapp size={"100%"} />
      </span>
      Contattaci
    </a>
  );
}

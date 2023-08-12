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
      <h1>Riparazioni e assistenza professionali su qualunque computer.</h1>
      <p>
        Benvenuti a Faxtornet - Dove l’innovazione incontra l’esperienza.
        Benvenuto nel futuro, al sicuro nelle mani di esperti.
      </p>
      <section className="bottoni">
        <a href="#servizi">Servizi</a>
        <WhatsappButton />
      </section>
    </section>
  );
}

export function WhatsappButton() {
  return (
    <button className="whatsapp-button">
      <FaWhatsapp size={"1.5vw"} /> Contattaci
    </button>
  );
}

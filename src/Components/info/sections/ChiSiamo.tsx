import HeaderLink from "../../HeaderLink";

import assetWho from "../../../assets/images/filippo-desktop.jpg";

function ChiSiamo() {
  return (
    <section className="page-section chi-siamo">
      <HeaderLink />
      <div className="chi-siamo__content-wrapper">
        <Content />
        <img src={assetWho} alt="" />
      </div>
    </section>
  );
}

export default ChiSiamo;

function Content() {
  return (
    <section className="content">
      <div className="trattino"></div>
      <h1>Chi siamo e come lavoriamo.</h1>
      <p>
        Benvenuti da Faxtornet, il luogo dove i computer trovano nuova vita!
        Offriamo servizi di riparazione e assistenza personalizzati, curati
        direttamente da Campagnolo Filippo, il nostro esperto tecnico.
        Affidabilità e competenza al vostro servizio.
      </p>
      <section className="stats">
        <div>
          <h1>250+</h1>
          <p>Ottime Recensioni</p>
        </div>
        <div>
          <h1>100%</h1>
          <p>Clienti Soddisfatti</p>
        </div>
      </section>
    </section>
  );
}

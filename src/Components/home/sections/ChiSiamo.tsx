import qr from "../../../assets/images/qr.png";

function ChiSiamo() {
  return (
    <section className="chi-siamo-sect" id="chi-siamo">
      <div className="content-wrapper">
        <Content />
        <QrCodeCard />
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

export function QrCodeCard() {
  return (
    <section className="qr-card">
      <img src={qr} alt="" />
      <p>Scannerizza il QR Code per chattare subito con noi</p>
    </section>
  );
}

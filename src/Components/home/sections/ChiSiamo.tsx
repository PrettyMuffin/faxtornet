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
        Benvenuti da <span style={{ fontWeight: "bold" }}>Faxtornet</span>, il
        luogo dove i computer trovano nuova vita. Anche se non indossiamo un
        camice bianco, lavoriamo all’interno di una vera e propria “clinica”
        (computer clinic), capace di offrire servizi di riparazione e assistenza
        personalizzati. <br /> Mettiamo al tuo servizio affidabilità e
        competenza ripristinando pc e computer desktop, grazie all’opera di un
        tecnico dalla consolidata esperienza:{" "}
        <span style={{ fontWeight: "bold" }}>Filippo Campagnolo.</span>
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

import { useEffect, useState } from "react";
import qr from "../../../assets/images/qr.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import userIcon from "../../../assets/images/user.png";
import emailIcon from "../../../assets/images/email.png";
import phoneIcon from "../../../assets/images/phoneLogo.png";
import ConfirmEmailToast from "./ConfirmEmailToast";
import { ToastProp } from "../../../Models";

function ChiSiamo() {
  const [toastConfirm, setToastConfirm] = useState<ToastProp>({
    canShow: true,
    text: "Email inviata correttamente",
    error: false,
  });
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1375 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1374, min: 501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: Mettere il secureToken come variabile d'ambiente su netlify
    // TODO: Creare Database.json con le mail criptate in sha256
    window?.Email.send({
      SecureToken: "eca12333-d8d3-487c-8ada-7ec1a647917c",
      To: "markobrunello2010@gmail.com",
      From: "airpippo@gmail.com",
      Subject: "Test",
      Body: `Ciao, sono ${data.get(
        "nomeUser"
      )}\n Ho visto il sito e sarei interessato/a ad una riparazione.\n Puoi contattarmi presso:\n - Email: ${data.get(
        "emailUser"
      )};\n - Cellulare: +39 ${data.get("cellUser")}`,
    }).then((message: any) => {
      if (message === "OK")
        setToastConfirm({
          canShow: true,
          text: "Registrazione completata con successo",
          error: false,
        });
      else
        setToastConfirm({
          canShow: true,
          text: "Registrazione non effettuata, verifica che la mail esista",
          error: true,
        });
    });
  }

  useEffect(() => {
    if (toastConfirm.canShow)
      setTimeout(() => {
        setToastConfirm({ ...toastConfirm, canShow: false });
      }, 2000);
  }, [toastConfirm]);

  return (
    <section className="chi-siamo-sect" id="chi-siamo">
      <section className="content-wrapper">
        <Content />
        <Carousel itemClass="carosello-elemento" responsive={responsive}>
          <ContattoForm sendEmail={sendEmail} />
          <QrCodeCard />
        </Carousel>
        <ConfirmEmailToast
          text={toastConfirm.text}
          canShow={toastConfirm.canShow}
          error={toastConfirm.error}
        />
      </section>
    </section>
  );
}

interface ContattoFormProp {
  sendEmail(e: React.FormEvent<HTMLFormElement>): void;
}

function ContattoForm({ sendEmail }: ContattoFormProp) {
  const [isError, setIsError] = useState(false);

  const errorStateClass = "error-state";

  return (
    <section className="formContatto">
      <h2>Compila per prenotare una riparazione</h2>
      <form onSubmit={(e) => sendEmail(e)}>
        <div className="input-container">
          <img src={userIcon} />
          <input
            type="text"
            id="nome"
            name="nomeUser"
            className={`${isError && errorStateClass}`}
            placeholder="Il tuo nome"
            required
          />
        </div>
        <div className="input-container">
          <img src={emailIcon} />
          <input
            type="email"
            id="mail"
            name="emailUser"
            className={`${isError && errorStateClass}`}
            placeholder="La tua mail"
            required
          />
        </div>
        <div className="input-container">
          <img src={phoneIcon} />
          <input
            type="number"
            id="cell"
            name="cellUser"
            className={`${isError && errorStateClass}`}
            placeholder="N di telefono"
            required
          />
        </div>
        <button type="submit">Invia</button>
      </form>
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
        <em>(computer clinic)</em>, capace di offrire servizi di riparazione e
        assistenza personalizzati. <br /> Mettiamo al tuo servizio affidabilità
        e competenza ripristinando pc e computer desktop, grazie all’opera di un
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

import React, { useContext, useEffect, useState } from "react";
import qr from "../../../assets/images/qr.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import userIcon from "../../../assets/images/user.png";
import emailIcon from "../../../assets/images/email.png";
import phoneIcon from "../../../assets/images/phoneLogo.png";
import ConfirmEmailToast from "./ConfirmEmailToast";
import { ToastProp } from "../../../Models";

import Email from "../../../smtp";
import { PageContext } from "../../../App";
import CountUp from "react-countup";

function ChiSiamo() {
  const [toastConfirm, setToastConfirm] = useState<ToastProp>({
    canShow: false,
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
    console.log(data.get("emailUser")?.toString())
    Email.send({
      SecureToken: "2b84bebf-bde0-4bf2-b77c-28ba2ae8f538",
      //To: "markobrunello2010@gmail.com",
      //From: "airpippo@gmail.com",
      To: "airpippo@gmail.com",
      From: data.get("emailUser")?.toString(),
      Subject: "Prenotazione Riparazione",
      Body: `Ciao, sono ${data.get(
        "nomeUser"
      )}\n Ho visto il sito e sarei interessato/a ad una riparazione.\n Puoi contattarmi presso:\n - Email: ${data.get(
        "emailUser"
      )};\n - Cellulare: +39 ${data.get("cellUser")}`,
    }).then((message: unknown) => {
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
    // dopo 2 secondi che il toast di conferma è stao mostrato viene di nuovo nascosto
    if (toastConfirm.canShow)
      setTimeout(() => {
        setToastConfirm({ ...toastConfirm, canShow: false });
      }, 2000);
  }, [toastConfirm]);

  return (
    <section className="page-section chi-siamo-sect" id="chi-siamo">
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

export default ChiSiamo;

interface ContattoFormProp {
  sendEmail(e: React.FormEvent<HTMLFormElement>): void;
}

function ContattoForm({ sendEmail }: ContattoFormProp) {
  const [isError, setIsError] = useState(false);

  const errorStateClass = "error-state";

  return (
    <section className="formContatto">
      <h2>Compila per prenotare una riparazione</h2>
      <form
        onSubmit={(e) => {
          sendEmail(e);
          setIsError(false); // solo per production
          // pulisco tutti gli input-fileds dopo che l'utente ha fatto il submit
          e.currentTarget.reset();
        }}
      >
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

function Content() {
  const { recensioniTotali } = useContext(PageContext);
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
          <h1>
            <CountUp
              className="text-red-faxtornet"
              start={0}
              useEasing={true}
              end={recensioniTotali!}
            />
          </h1>
          <p>Ottime Recensioni</p>
        </div>
        <div>
          <h1>
            <CountUp
              className="text-red-faxtornet"
              start={0}
              useEasing={true}
              end={100}
            />
            %
          </h1>
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

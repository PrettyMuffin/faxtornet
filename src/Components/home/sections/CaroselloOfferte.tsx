import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//! Immagini
import mac from "../../../assets/images/mac.jpg";
import assemblaggio from "../../../assets/images/assemblaggio pc.jpg";
import pastaTermica from "../../../assets/images/pasta termica.jpg";
import os from "../../../assets/images/os download.jpg";
import cambioSsd from "../../../assets/images/cambio ssd.jpg";

type Props = {};

function CaroselloOfferte({}: Props) {
  return (
    <section className="sect-carosello-offerte" id="servizi">
      <header>
        <div className="trattino"></div>
        <h1>Cosa Offriamo</h1>
        <p>
          Provvediamo diversi servizi di riparazione e soluzioni per i nostri
          clienti:
        </p>
      </header>
      <Carosello />
    </section>
  );
}

export default CaroselloOfferte;

type CaroselloItem = {
  imgPath: string;
  title: string;
  description: string;
};

function Carosello() {
  const items: CaroselloItem[] = [
    {
      imgPath: mac,
      title: "Sostituzione Display PC & MAC",
      description:
        "Neanche la riparazione del delicato Mac spaventa i nostri tecnici, che senza problemi, trattano il problema con professionalità e tempestività.",
    },
    {
      imgPath: assemblaggio,
      title: "Assemblaggio PC Desktop",
      description:
        "Al fine di offrire un’esperienza più completa, assembliamo in tempo utile computer desktop dal qualsiasi numero di componenti.",
    },
    {
      imgPath: pastaTermica,
      title: "Rettifica Sistema Di Raffreddamento PC & MAC",
      description:
        "Al termine di ogni riparazione puliamo il computer dalla polvere e, se necessario, ne sostituiamo la pasta termica. Così da evitare il surriscaldamento.",
    },
    {
      imgPath: os,
      title: "Installazione Windows & MAC OS",
      description:
        "Faxtornet offre l'installazione rapida e affidabile del sistema operativo, per un'esperienza informatica fluida e ottimizzata.",
    },
    {
      imgPath: cambioSsd,
      title: "Migrazione Su Dischi A Stato Solido Mantenendo Propri Dati",
      description:
        "Nel caso vi si sia rotto un HDD o SSD non c’è problema, i nostri tecnici sono in grado di recuperare i dati e inserirli in una nuova unità di salvataggio dati.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1374 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1374, min: 922 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 922, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomDot = ({
    onClick,
    active,
  }: {
    onClick?: any;
    active?: boolean;
  }) => (
    <button
      className={`custom-dot ${active ? "active" : ""}`}
      onClick={() => onClick()}
    />
  );

  return (
    <Carousel
      arrows={false}
      showDots={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition="all 1s ease"
      transitionDuration={1500}
      customDot={<CustomDot />}
      itemClass="carosello-elemento"
      className="carosello"
    >
      {items.map((el) => {
        return (
          <CardOfferta
            imgPath={el.imgPath}
            title={el.title}
            description={el.description}
          />
        );
      })}
    </Carousel>
  );
}

function CardOfferta({ imgPath, title, description }: CaroselloItem) {
  return (
    <section className="offerta-card">
      <img src={imgPath} alt="" />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

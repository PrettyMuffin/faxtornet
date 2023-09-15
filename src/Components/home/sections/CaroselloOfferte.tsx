import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CaroselloItem } from "../../../Models";
import { caroselloItems } from "../../../Data";

function CaroselloOfferte() {
  return (
    <section className="sect-carosello-offerte" id="servizi">
      <header>
        <div className="trattino"></div>
        <h1>I Nostri Servizi</h1>
        <p>
          Disponiamo di servizi di riparazione e soluzioni su misura per tutti o
          quasi i nostri clienti.
        </p>
      </header>
      <Carosello />
    </section>
  );
}

export default CaroselloOfferte;

function Carosello() {
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
      {caroselloItems.map((el) => {
        return (
          <ServizioCard
            imgPath={el.imgPath}
            title={el.title}
            description={el.description}
          />
        );
      })}
    </Carousel>
  );
}

export function ServizioCard({ imgPath, title, description }: CaroselloItem) {
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

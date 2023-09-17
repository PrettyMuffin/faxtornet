import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CaroselloItem } from "../../../Models";
import { caroselloItems, responsive } from "../../../Data";

function CaroselloOfferte() {
  return (
    <section className="sect-carosello-offerte" id="servizi">
      <header>
        <div className="trattino"></div>
        <h1>Computer Clinic</h1>
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

export const CustomDot = ({
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

function Carosello() {
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
      {caroselloItems.map((el, i) => {
        return (
          <ServizioCard
            imgPath={el.imgPath}
            title={el.title}
            description={el.description}
            key={i}
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

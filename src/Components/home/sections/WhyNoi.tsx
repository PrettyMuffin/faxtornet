import { whyNoiItems } from "../../../Data";
import { WhyNoiCard } from "../../../Models";

function WhyNoi() {
  return (
    <section className="why-us" id="why-us">
      <header>
        <div className="trattino"></div>
        <h1>Perché Scegliere Noi</h1>
        <p>
          Ci sono molti motivi per cui avere Faxtornet come prima scelta quando
          si tratta di riparazione, eccone alcuni:
        </p>
      </header>
      <section className="card-container">
        {whyNoiItems.map((el) => {
          return (
            <WhyNoiCardPage
              imgPath={el.imgPath}
              title={el.title}
              descrizione={el.descrizione}
            />
          );
        })}
      </section>
    </section>
  );
}

export default WhyNoi;

function WhyNoiCardPage({ imgPath, title, descrizione }: WhyNoiCard) {
  return (
    <section className="card">
      <img src={imgPath} alt="" />
      <h2>{title}</h2>
      <p>{descrizione}</p>
    </section>
  );
}

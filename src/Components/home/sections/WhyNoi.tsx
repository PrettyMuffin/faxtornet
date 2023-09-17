import { whyNoiItems } from "../../../Data";
import { WhyNoiCard } from "../../../Models";

function WhyNoi() {
  return (
    <section className="why-us" id="why-us">
      <header>
        <div className="trattino"></div>
        <h1>FAXTORNET? EASY!</h1>
        <p>
          Ci sono un milione di (giga) motivi per scegliere Faxtornet quando si
          tratta di riparazione. Non ci credi? Te le diamo noi tre buone
          ragioni.
        </p>
      </header>
      <section className="card-container">
        {whyNoiItems.map((el, i) => {
          return (
            <WhyNoiCardPage
              imgPath={el.imgPath}
              title={el.title}
              descrizione={el.descrizione}
              key={i}
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

import { ServizioCard } from "../home/sections/CaroselloOfferte";
import { caroselloItems } from "../../Data";
import HeaderLink from "../HeaderLink";
import { WhatsappButton } from "../home/sections/Presentazione";

function Servizi() {
  return (
    <main className="servizi-page">
      <HeaderLink />
      <section className="page-section">
        <header>
          <div className="trattino"></div>
          <h1>Cosa Offriamo</h1>
          <p>
            Provvediamo diversi servizi di riparazione e soluzioni per i nostri
            clienti:
          </p>
        </header>
        <section className="grid-cards">
          {caroselloItems.map((el) => {
            return (
              <ServizioCard
                imgPath={el.imgPath}
                description={el.description}
                title={el.title}
              />
            );
          })}
          <section className="special-card">
            <div className="content">
              <h2>E molto altro ancora...</h2>
              <p>Passa da noi, e dai una seconda vita al tuo computer.</p>
            </div>
            <WhatsappButton />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Servizi;

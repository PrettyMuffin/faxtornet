import serviziAffidabili from "../../../assets/images/handshake.png";
import qualificato from "../../../assets/images/qualificato.png";
import onesta from "../../../assets/images/rating.png";

type WhyNoiCard = {
  imgPath: string;
  title: string;
  descrizione: string;
};

function WhyNoi() {
  const items: WhyNoiCard[] = [
    {
      imgPath: serviziAffidabili,
      title: "Servizi Affidabili",
      descrizione:
        "Soddisfare il cliente è la nostra priorità numero 1.Se non sei soddisfatto non paghi!",
    },
    {
      imgPath: qualificato,
      title: "Personale Qualificato",
      descrizione:
        "Tutti i nostri tecnici, qui a Faxtornet, hanno anni di esperienza e portano a termine il lavoro.",
    },
    {
      imgPath: onesta,
      title: "Onestà Con Il Cliente",
      descrizione:
        "Per noi l’onestà e la chiarezza con il cliente è fondamentale, se un problema non è risolvibile da noi, non vi faremo perdere tempo.",
    },
  ];

  return (
    <section className="why-us">
      <header>
        <div className="trattino"></div>
        <h1>Perché Scegliere Noi</h1>
        <p>
          Ci sono molti motivi per cui avere Faxtornet come prima scelta quando
          si tratta di riparazione, eccone alcuni:
        </p>
      </header>
      <section className="card-container">
        {items.map((el) => {
          return (
            <WhyNoiCard
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

function WhyNoiCard({ imgPath, title, descrizione }: WhyNoiCard) {
  return (
    <section className="card">
      <img src={imgPath} alt="" />
      <h2>{title}</h2>
      <p>{descrizione}</p>
    </section>
  );
}

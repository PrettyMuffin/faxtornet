import img from "../../../assets/images/filippo-mac.jpg";

function Obbiettivi() {
  return (
    <section id="obbiettivi" className="page-section obbiettivi-sect">
      <img src={img} alt="" />
      <section className="content">
        <div className="trattino"></div>
        <h1>Il Nostro Obbiettivo</h1>
        <h2>Ci impegnamo a fornire servizi informatici al massimo livello</h2>
        <p>
          Soddisfare le richieste dei nostri clienti è la nostra priorità numero
          1, insieme alla chiarezza e onestà con cui interagiamo con loro.
        </p>
      </section>
    </section>
  );
}

export default Obbiettivi;

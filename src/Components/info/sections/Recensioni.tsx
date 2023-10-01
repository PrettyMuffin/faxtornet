import { useContext } from "react";
import { PageContext } from "../../../App";
import { BsStarFill } from "react-icons/bs";
import { Review } from "../../../Models";

function Recensioni() {
  const { recensioni } = useContext(PageContext);

  return (
    <section className="page-section recensioni-sect">
      <header>
        <div className="trattino"></div>
        <h1>Perché le persone scelgono Faxtornet</h1>
      </header>
      <section className="recensioni">
        {recensioni &&
          recensioni.slice(0, 4).map((el, index) => {
            return <Recensione key={index} {...el} />;
          })}
      </section>
    </section>
  );
}

export default Recensioni;

function Recensione({ author_name, text }: Review) {
  return (
    <section className="recensione">
      <header className="stelle">
        <BsStarFill size={"1.7rem"} className={"fill-yellow"} />
        <BsStarFill size={"1.7rem"} className={"fill-yellow"} />
        <BsStarFill size={"1.7rem"} className={"fill-yellow"} />
        <BsStarFill size={"1.7rem"} className={"fill-yellow"} />
        <BsStarFill size={"1.7rem"} className={"fill-yellow"} />
      </header>
      <section className="recensione-testo">
        {/* <q>{text}</q> */}
        <p>{text}</p>
      </section>
      <p className="capitalized autore">- {author_name.toLowerCase()}</p>
    </section>
  );
}

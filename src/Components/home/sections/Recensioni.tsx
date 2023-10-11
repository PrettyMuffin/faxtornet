import { useContext } from "react";
import { PageContext } from "../../../App";
import { BsStarFill } from "react-icons/bs";
import { Review } from "../../../Models";

import googleReviewLogo from "../../../assets/images/google reviews.png"

function Recensioni() {
  const { recensioni } = useContext(PageContext);

        // TODO: mettere immagine logo google reviews
        //<h1>La Voce dei Nostri Clienti: Google</h1>
  return (
    <section className="page-section recensioni-sect" id="recensioni">
      <header>
        <div className="trattino"></div>
        <div className="titolo-recensioni">
          <h1>La Voce dei Nostri Clienti:</h1>
          <img src={googleReviewLogo} alt="google review logo" />
        </div>
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
        <p>{text}</p>
      </section>
      <p className="capitalized autore">- {author_name.toLowerCase()}</p>
    </section>
  );
}

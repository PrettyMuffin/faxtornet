import ChiSiamo from "./sections/ChiSiamo";
import Obbiettivi from "./sections/Obbiettivi";
import Recensioni from "./sections/Recensioni";

function Info() {
  return (
    <main className="info-page">
      <ChiSiamo />
      <Obbiettivi />
      <Recensioni />
    </main>
  );
}

export default Info;

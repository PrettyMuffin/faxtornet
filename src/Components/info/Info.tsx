import ChiSiamo from "./sections/ChiSiamo";
import Obbiettivi from "./sections/Obbiettivi";
import Recensioni from "./sections/Recensioni";
import Location from "./sections/Location";

function Info() {
  return (
    <main className="info-page">
      <ChiSiamo />
      <Obbiettivi />
      {/* //TODO: Dire a Filippo di google maps */}
      <Recensioni />
      <Location />
    </main>
  );
}

export default Info;

import CaroselloOfferte from "./sections/CaroselloOfferte";
import ChiSiamo from "./sections/ChiSiamo";
import Presentazione from "./sections/Presentazione";
import WhyNoi from "./sections/WhyNoi";
import Recensioni from "./sections/Recensioni";

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Presentazione />
      <ChiSiamo />
      <CaroselloOfferte />
      <WhyNoi />
      <Recensioni />
    </main>
  );
}

export default HomePage;

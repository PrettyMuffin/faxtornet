import CaroselloOfferte from "./sections/CaroselloOfferte";
import ChiSiamo from "./sections/ChiSiamo";
import Presentazione from "./sections/Presentazione";
import WhyNoi from "./sections/WhyNoi";

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Presentazione />
      <ChiSiamo />
      <CaroselloOfferte />
      <WhyNoi />
    </main>
  );
}

export default HomePage;

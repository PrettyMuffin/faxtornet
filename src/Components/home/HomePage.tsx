import CaroselloOfferte from "./sections/CaroselloOfferte";
import ChiSiamo from "./sections/ChiSiamo";
import Presentazione from "./sections/Presentazione";

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Presentazione />
      <ChiSiamo />
      <CaroselloOfferte />
    </main>
  );
}

export default HomePage;

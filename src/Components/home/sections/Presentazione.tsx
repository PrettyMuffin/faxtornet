import video from "../../../assets/video/riparazioneMac.mp4";

type Props = {};

function Presentazione({}: Props) {
  return (
    <section className="presentazione-sect">
      <video autoPlay muted loop src={video} />
      {/* <source src={video} type="video/mp4" /> */}
      {/* </video> */}
    </section>
  );
}

export default Presentazione;

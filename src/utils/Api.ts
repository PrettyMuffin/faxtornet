import { Review } from "../Models";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GetRecensioni() {
  console.log(GOOGLE_API_KEY);

  const data = await fetch(
    // heroku app, only in development server, when production, remove
    // "https://cors-anywhere.herokuapp.com/" +
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJU1RsmiEkeUcR5yG23k0klJI&key=${GOOGLE_API_KEY}&reviews_sort=newest&language=it`,
    {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (!data.ok) console.error("Errore nella richiesta dei dati");
  const {
    reviews,
    user_ratings_total: totalReviews,
  }: { reviews: Review[]; user_ratings_total: number } = (await data.json())
    .result;
  return { reviews, totalReviews };
}

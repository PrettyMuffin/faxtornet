import { Review } from "../Models";

//const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export async function GetRecensioni() {
  // dev server
  // const data = await fetch('http://localhost:4000/api/reviews')
  // Production
  const data = await fetch('http://faxtornet.it:4000/api/reviews')
  if (!data.ok) console.error("Errore nella richiesta dei dati");
  const {
    reviews,
    user_ratings_total: totalReviews,
  }: { reviews: Review[]; user_ratings_total: number } = (await data.json())
    .result;
  return { reviews, totalReviews };
}

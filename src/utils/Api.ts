import { Review } from "../Models";

export async function GetRecensioni() {
  const data = await fetch(
    // heroku app, only in development server, when production, remove
    // "https://cors-anywhere.herokuapp.com/" +
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJU1RsmiEkeUcR5yG23k0klJI&key=AIzaSyCVD-K-pJBh1-Oyi3gy_lfAVo5tY7ofJ-c&reviews_sort=newest&language=it"
  );
  if (!data.ok) return { reviews: [], totalReviews: 0 };
  const {
    reviews,
    user_ratings_total: totalReviews,
  }: { reviews: Review[]; user_ratings_total: number } = (await data.json())
    .result;
  return { reviews, totalReviews };
}

import express from "express"
import axios from "axios"
import cors from "cors"

const app = express()
const PORT = 4000

app.use(cors())

app.get("/api/reviews", async (_, res) => {
  try {
   const data = await axios.get('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJU1RsmiEkeUcR5yG23k0klJI&key=AIzaSyCVD-K-pJBh1-Oyi3gy_lfAVo5tY7ofJ-c&language=it&reviews_sort=newest&fields=reviews,user_ratings_total') 
    res.json(data.data)
  } catch (error) {
    res.status(500).json({"error": "Impossibile ottenere le recensioni"})
  }
})

app.listen(PORT, ()=> {console.log('Server online')})

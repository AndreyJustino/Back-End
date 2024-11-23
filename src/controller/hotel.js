import { Hotels } from "../model/hotel.model.js"

async function getHotels(req, res) {
  const hotels = await Hotels.findAll();

  res.send(hotels)
}

export const HotelController = {
  getHotels
}
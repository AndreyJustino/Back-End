function getHotels(req, res) {
  res.send([{
    name: "Meu Resort"
  }])
}

export const HotelController = {
  getHotels
}
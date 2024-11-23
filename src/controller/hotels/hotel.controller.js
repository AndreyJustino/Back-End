import { database } from "../../database/config.js";
import { Hotel } from "../../models/Hotel.model.js";

const listHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    console.log(Hotel);
    res.json(hotels);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao listar hotéis' });
  }
};

export { listHotels };

import { Hotel } from "../../models/Hotel.model.js";

const listHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar hotéis' });
  }
};

export { listHotels };

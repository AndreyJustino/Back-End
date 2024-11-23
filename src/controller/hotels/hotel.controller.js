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

const createHotels = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};



export { listHotels, createHotels };

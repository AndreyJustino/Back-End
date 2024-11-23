import { Hotel } from "../../models/Hotel.model.js";

const listHotels = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = req.query.pageSize || 10;

  try {
    const hotels = await Hotel.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [['id', 'ASC']],
    });

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

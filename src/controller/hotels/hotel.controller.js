import { database } from "../../database/config.js";
import { Hotel } from "../../models/Hotel.model.js";

const listHotels = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = req.query.pageSize || 10;

  try {
    const hotels = await Hotel.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize
    });

    res.json(hotels);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao listar hotéis' });
  }
};

export { listHotels };

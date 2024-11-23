import { Hotel } from "../../models/Hotel.model.js";

const filtroHotel = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Hotel',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar hotéis' });
  }
};

const filtroCasa = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'casa',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar hotéis' });
  }
};

const filtroPousada = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Pousada',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar pousadas' });
  }
};

const filtroHostel = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Hostel',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar hostels' });
  }
};

const filtroAlbergue = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Albergue',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar albergues' });
  }
};

const filtroResort = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Resort',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar resorts' });
  }
};

const filtroHotelFazenda = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Hotel Fazenda',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar hotéis fazenda' });
  }
};

const filtroFlatApartHotel = async (req, res) => {
  try {
    const hotels = await Hotel.findAll({
      where: {
        category: 'Flat/Apart Hotel',
      },
    });

    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao listar flats/apart hotéis' });
  }
};

export {
  filtroHotel,
  filtroPousada,
  filtroHostel,
  filtroAlbergue,
  filtroResort,
  filtroHotelFazenda,
  filtroFlatApartHotel,
  filtroCasa
};

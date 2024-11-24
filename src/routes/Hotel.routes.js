import express from "express";
import { filtroHotel, filtroPousada, filtroHostel, filtroAlbergue, filtroResort, filtroHotelFazenda, filtroFlatApartHotel } from "../controller/filtro/filtro.controller.js";
import { createHotels, listHotels } from "../controller/hotels/hotel.controller.js";

const routesHotel = express.Router();

routesHotel.get('/hotels', listHotels );

routesHotel.post('/hotels', createHotels);

routesHotel.get('/hotels/filtro/hotel', filtroHotel);
routesHotel.get('/hotels/filtro/pousada', filtroPousada);
routesHotel.get('/hotels/filtro/hostel', filtroHostel);
routesHotel.get('/hotels/filtro/albergue', filtroAlbergue);
routesHotel.get('/hotels/filtro/resort', filtroResort);
routesHotel.get('/hotels/filtro/hotel-fazenda', filtroHotelFazenda);
routesHotel.get('/hotels/filtro/flat-apart-hotel', filtroFlatApartHotel);

export default routesHotel ;

import express from "express";
import { filtroCasa, filtroHotel, filtroPousada, filtroHostel, filtroAlbergue, filtroResort, filtroHotelFazenda, filtroFlatApartHotel } from "../controller/filtro/filtro.controller.js";
import verifyToken from "../middleware/verifyToken.js";
import { createHotels, listHotels } from "../controller/hotels/hotel.controller.js";

const hotelRouter = express.Router();

hotelRouter.get('/hotels', listHotels );

hotelRouter.post('/hotels', createHotels);

hotelRouter.get('/hotels/filtro/hotel', filtroHotel);
hotelRouter.get('/hotels/filtro/casa', filtroCasa);
hotelRouter.get('/hotels/filtro/pousada', filtroPousada);
hotelRouter.get('/hotels/filtro/hostel', filtroHostel);
hotelRouter.get('/hotels/filtro/albergue', filtroAlbergue);
hotelRouter.get('/hotels/filtro/resort', filtroResort);
hotelRouter.get('/hotels/filtro/hotel-fazenda', filtroHotelFazenda);
hotelRouter.get('/hotels/filtro/flat-apart-hotel', filtroFlatApartHotel);

export { hotelRouter };

import express from "express";
import { createHotels, listHotels } from "../controller/hotels/hotel.controller.js";

const hotelRouter = express.Router()

hotelRouter.get('/hotels', listHotels);
hotelRouter.post('/hotels', createHotels);


export { hotelRouter };
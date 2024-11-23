import express from "express";
import { createHotels, listHotels } from "../controller/hotels/hotel.controller.js";
import verifyToken from "../middleware/verifyToken.js"

const hotelRouter = express.Router()

hotelRouter.get('/hotels', verifyToken, listHotels);
hotelRouter.post('/hotels', createHotels);


export { hotelRouter };
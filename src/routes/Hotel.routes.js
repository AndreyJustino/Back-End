import express from "express";
import { listHotels } from "../controller/Hotels/Hotel.controller.js";

const hotelRouter = express.Router()

hotelRouter.get('/hotels', listHotels);

export { hotelRouter };
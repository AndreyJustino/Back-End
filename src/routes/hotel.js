import { Router } from "express";
import { HotelController } from "../controller/hotel.js";

export const hotelRouter = Router();

hotelRouter.get("/hotel", HotelController.getHotels)

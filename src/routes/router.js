import express from "express";
import { listUsers } from "../controller/index.js";

const userRouter = express.Router()

userRouter.get('/users', listUsers);

export { userRouter };
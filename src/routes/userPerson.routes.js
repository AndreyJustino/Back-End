import express from "express";
import verifyToken from "../middleware/verifyToken.js"
import { createPerson, listPeople } from "../controller/user/userPerson.controller.js";

const peopleRouter = express.Router()

peopleRouter.get('/user/people', verifyToken, listPeople);
peopleRouter.post('/user/person', createPerson);


export { peopleRouter };
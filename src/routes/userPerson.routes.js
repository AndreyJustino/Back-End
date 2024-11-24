import { Router } from "express";
import { createPerson, listPeople, loginPersonUser } from "../controller/user/userPerson.controller.js";

const routesUser = Router();

routesUser.post("/loginPerson", loginPersonUser);
routesUser.get("/user/people", listPeople);
routesUser.post("/user/person", createPerson);

export default routesUser;

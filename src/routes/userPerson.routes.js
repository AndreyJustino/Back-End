import { Router } from "express";

import loginPerson from "../controller/user/userPerson.controller.js"; 

const routesUser = Router();



routesUser.post("/loginPerson", loginPerson); 



export default routesUser;

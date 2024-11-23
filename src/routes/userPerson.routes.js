import { Router } from "express";

import loginPerson from "../controller/user/userPerson.controller.js"; 

const routesUser = Router();



routesUser.post("/loginPerson",verifyUse, loginPerson); 



export default routesUser;

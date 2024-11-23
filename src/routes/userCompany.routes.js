import { Router } from "express";

import loginCompany from "../controller/user/userCompany.controller.js"; 

const routesUser = Router();



routesUser.post("/loginCompany",verifyUse, loginCompany); 



export default routesUser;

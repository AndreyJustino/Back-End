import { Router } from "express";

import loginCompany from "../controller/user/userCompany.controller.js"; 


const routesCompany  = Router();



routesCompany.post("/loginCompany", loginCompany); 



export default routesCompany ;
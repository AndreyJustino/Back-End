import express from "express";
import verifyToken from "../middleware/verifyToken.js"; 
import { createCompany, listCompanies } from "../controller/user/userCompany.controller.js";

const companyRouter = express.Router();

companyRouter.get('/user/companies', listCompanies);
companyRouter.post('/user/company', createCompany);

export { companyRouter };

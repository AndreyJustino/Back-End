import { Router } from "express";
import { createCompany, listCompanies, loginCompanyUser } from "../controller/user/userCompany.controller.js";

const routesCompany = Router();

routesCompany.post("/loginCompany", loginCompanyUser);
routesCompany.get("/user/companies", listCompanies);
routesCompany.post("/user/company", createCompany);

export default routesCompany;

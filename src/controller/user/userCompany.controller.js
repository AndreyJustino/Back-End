import { Company } from "../../models/userCompany.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function loginCompanyUser(req, res) {
  try {
    const company = await Company.findOne({
      where: {
        cnpj: req.body.cnpj,
      },
    });

    if (!company) {
      return res.status(404).json({
        message: "Empresa não encontrada.",
        status: 404,
      });
    }

    if (req.body.password !== company.password) {
      return res.status(401).json({
        message: "Senha inválida.",
        status: 401,
      });
    }

    const token = jwt.sign(
      {
        nome: company.name,
        cnpj: company.cnpj,
      },
      process.env.SECRET
    );

    res.status(200).json({
      message: "Login autorizado.",
      token: token,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao iniciar sessão",
      error: error.message,
      status: 500,
    });
  }
}

const listCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    console.log(companies);
    res.json(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error listing companies" });
  }
};

const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: "Error creating company" });
  }
};

export { loginCompanyUser, listCompanies, createCompany };

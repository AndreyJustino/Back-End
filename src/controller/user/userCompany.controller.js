import { Company } from "../../models/userCompany.model.js";

const listCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll()
    console.log(companies);
    res.json(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error listing companies' })
  }
};

const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: 'Error creating company' });
  }
};

export { listCompanies, createCompany };

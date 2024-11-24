import { Person } from "../../models/userPerson.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function loginPersonUser(req, res) {
  try {
    const person = await Person.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!person) {
      return res.status(404).json({
        message: "Usuario não encontrado.",
        status: 404,
      });
    }

    if (req.body.password !== person.password) {
      return res.status(401).json({
        message: "Senha inválida.",
        status: 401,
      });
    }

    const token = jwt.sign(
      {
        nome: person.name,
        email: person.email,
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

const listPeople = async (req, res) => {
  try {
    const people = await Person.findAll();
    console.log(people);
    res.json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error listing people" });
  }
};

const createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

export { loginPersonUser, listPeople, createPerson };

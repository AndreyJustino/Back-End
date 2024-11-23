import { Person } from "../../models/userPerson.model.js";

const listPeople = async (req, res) => {
  try {
    const people = await Person.findAll();
    console.log(people);
    res.json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error listing people' });
  }
};

const createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export { listPeople, createPerson };

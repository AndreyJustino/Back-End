import { loginPerson } from "../../models/userPerson.model.js";
import {compare} from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

async function loginPerson(req,res) {
    try{
        const person = await loginPerson.findOne({
            where: {
                email: req.body.email
            }
        })

        if(!person){
            return res.status(404).json({
                message: "Usuario não encontrado.",
                status: 404
            })
        }

        const validarPassword = await compare(req.body.password, person.password)

        if(!validarPassword){
            return res.status(401).json({
                message: "Senha inválida.",
                status: 401
            })
        }

        const token = jwt.sign({
            nome: person.name,
            email: person.email
        }, process.env.SECRET)

        res.status(200).json({
            message: "Login autorizado.",
            token: token,
            status: 200
        })

    } catch(error){
        res.status(500).json({
            message: "Erro ao iniciar sessão",
            error: error.message,
            status: 500
        })
    }
}

export default loginPerson
import { loginCompany } from "../../models/userCompany.model.js"; 
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function loginCompany(req, res) {
    try {
       
        const company = await loginCompany.findOne({
            where: {
                cnpj: req.body.cnpj 
            }
        });

      
        if (!company) {
            return res.status(404).json({
                message: "Empresa não encontrada.",
                status: 404
            });
        }

       
        const isPasswordValid = await compare(req.body.password, company.password);

        
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Senha inválida.",
                status: 401
            });
        }

        
        const token = jwt.sign(
            {
                nome: company.name,
                cnpj: company.cnpj
            },
            process.env.SECRET, 
            { expiresIn: "1h" } 
        );

        
        res.status(200).json({
            message: "Login autorizado.",
            token: token,
            status: 200
        });

    } catch (error) {
        
        res.status(500).json({
            message: "Erro ao iniciar sessão",
            error: error.message,
            status: 500
        });
    }
}

export default loginCompany;

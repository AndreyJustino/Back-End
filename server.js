import app from "./src/app.js"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT_API || 3000

app.listen(PORT, (req,res) => {
    console.log("Servidor iniciado!")
})

app.listen()
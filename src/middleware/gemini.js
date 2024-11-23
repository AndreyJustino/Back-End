import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config()

async function promptGemini(place) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const textPrompt = `Me responda apenas a qual categoria o ${place} pertence. As categorias são a seguinte: Hotel, Pousada, Hostel ou albergue, Resort, Hotel Fazenda, Pousada ou Flat/Apart hotel. QUERO APENAS A CATEGORIA DO LUGAR`

    const result = await model.generateContent(textPrompt);
    return result.response.candidates[0].content.parts[0].text
}

export default promptGemini

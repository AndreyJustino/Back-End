import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import { tryConnectSequelize } from "./database/config.js";
import { hotelRouter } from "./routes/Hotel.routes.js";
import { peopleRouter } from "./routes/userPerson.routes.js";
import { companyRouter } from "./routes/userCompany.routes.js";
const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(corsMiddleware);

server.use(hotelRouter);
server.use(peopleRouter);
server.use(companyRouter)

server.listen(port, () => {
  tryConnectSequelize();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

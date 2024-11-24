import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import { tryConnectSequelize } from "./database/config.js";
import  routesHotel  from "./routes/Hotel.routes.js";
import  routesUser  from "./routes/userPerson.routes.js";
import  routesCompany  from "./routes/userCompany.routes.js";

const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(corsMiddleware);

server.use(routesHotel);
server.use(routesCompany);
server.use(routesUser);


server.listen(port, () => {
  tryConnectSequelize();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});

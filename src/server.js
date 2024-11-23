import express from 'express';
import corsMiddleware from './middleware/corsMiddleware.js';
import { tryConnectSequelize } from './database/config.js';
import { userRouter } from './routes/router.js';

const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(corsMiddleware);
server.use(userRouter)


server.listen(port, () => {
  tryConnectSequelize();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
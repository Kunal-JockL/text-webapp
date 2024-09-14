import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const socket_server = createServer(app);

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());

const io = new Server(socket_server);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

io.on('connection', socket =>{
  console.log(socket.id);
});

socket_server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
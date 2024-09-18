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

let waitBuffer = [];
let roomList = {};

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('send-user', (userName) => {
    waitBuffer.push(socket);
    console.log("Waitbuffer's length:", waitBuffer.length);

    socket.emit('aknowledge', userName);
    console.log(userName);

    checkWaits();
    console.log(roomList);
  });
});

socket_server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function checkWaits() {
  if (waitBuffer.length >= 2) {
    let socket1 = waitBuffer.shift();
    let socket2 = waitBuffer.shift();

    let room = createRoom(socket1, socket2);
    
    roomList[room] = { socket1: socket1.id, socket2: socket2.id };

    socket1.join(room);
    socket2.join(room);
    console.log("Waitbuffer's length:", waitBuffer.length);

    socket1.emit('paired', `You are paired with ${socket2.id} in room ${room}`, room);
    socket2.emit('paired', `You are paired with ${socket1.id} in room ${room}`, room);
  }
}

function createRoom(socket1, socket2) {
  return socket1.id + socket2.id;
}

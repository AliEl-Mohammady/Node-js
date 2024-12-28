const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5500"
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('typing', () => {
        socket.broadcast.emit('typing');
    });

    socket.on('clear_typing', () => {
        socket.broadcast.emit('clear_typing');
    });
});

server.listen(4004, () => {
    console.log('server running at http://localhost:4000');
});
const express = require('express'),
      socket = require('socket.io'),
      path = require('path'),
      app = express(),
      port = process.env.PORT || 3000;

const server = app.listen(port);

// socket
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('./2-sections/home');
});

io.on('connection', (socket) => {
    socket.on('new-message', (data) => {
        io.sockets.emit('new-message', data);
    });
})
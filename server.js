const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const port = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('public'));

io.on('connection', socket => {
    socket.on('history', function(data){
        io.emit('calHistoryLog', data);
    });
});

server.listen(port, function () {
    console.log('port ' + port);
})

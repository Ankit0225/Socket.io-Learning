const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server =  http.createServer(app)
const io = socketio(server)


app.use(express.static(__dirname + '/public'))

io.on('connection',(socket) => {
    console.log('Connected to =', socket.id);

    socket.on('Colorit', (data) => {
        // console.log('ColorIt Event Recieved', data);
        // io.emit() sends data to everyone
        io.emit('Colorit', data)
    })
})

server.listen('5000',() => {
 console.log('Server Started on http://localhost:5000');
})
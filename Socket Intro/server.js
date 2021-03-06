const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connected to =' ,socket.id);
})

server.listen('4003', () => {
    console.log('Server Started at http://localhost:4003');
})


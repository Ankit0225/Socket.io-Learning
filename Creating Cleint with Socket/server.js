const http = require('http')
const express = require('express')
const socketio = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = socketio(server)

io.on('connection' , (socket) => {
  console.log('Connected with Socket id = ' , socket.id);
})

app.use('/' , express.static(__dirname + '/public'))

server.listen(4000,() => {
  console.log('Started on http://localhost:4000');
})

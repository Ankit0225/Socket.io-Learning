const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)
app.use(express.static(__dirname + '/public'))

server.listen('4003', () => {
    console.log('Server Started at http://localhost:4003');
})


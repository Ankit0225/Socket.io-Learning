const express = require('express')
const http = require('http')
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen('4003', () => {
    console.log('Server Started at http://localhost:4003');
})


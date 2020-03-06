// imports
const express = require('express')
const path = require('path')

// port
const port = 3001
const server = express()
server.use(express.static(path.join(__dirname, 'dist')))
server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

server.use(function(req, res, next) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

server.listen(port, function() {
    console.log(`server is listening at port ${port}`)
})

const express = require('express')
const app = express()
const server = require('http').createServer(app)

const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.statusCode = 200
    res.sendFile(__dirname + '/pages/index.html')
})

app.post('/post', (req, res) => {
    res.send('A successfully post request!')
})

app.get('/post', (req, res) => {
    res.send('Make a post request to this domain!')
})

server.listen(PORT, () => {
    console.log('Server Started!')
})
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/a', (req, res) => res.send('Hello World! Are you A?'))
app.get('/b', (req, res) => res.send('Hello World! Are you B?'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
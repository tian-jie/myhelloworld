const express = require('express')
const app = express()

function AAction(req, res){
    res.send('Hello World!')
}
function HomeAction(req, res){
    res.send('Hello World!')
}

app.get('/', HomeAction)
app.get('/a', AAction)
app.get('/b', (req, res) => res.send('Hello World! Are you B?'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


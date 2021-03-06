// require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();


console.log("Hello World!")
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

// app.use('/', )

app.use('/', bodyParser.urlencoded({extended: false}))


app.use('/', function (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')    
})

app.use('/public', express.static(__dirname + '/public'))

const obj = {
    "message": "Hello json"
}

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.send({"message": obj.message.toUpperCase()})    
    }
    res.send(obj)
})



console.log(process.env.MESSAGE_STYLE)

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.send({"time": req.time})
})

app.get('/:word/echo', (req, res) => {
    res.send({"echo": req.params.word})
})

app.get('/name', (req, res) => {    
    res.send({"name": `${req.query.first} ${req.query.last}`})
})

app.post('/name', (req, res) => {
    res.send({"name": `${req.body.first} ${req.body.last}`});
})
































 module.exports = app;

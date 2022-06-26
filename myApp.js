require('dotenv').config()
let express = require('express');
let app = express();


console.log("Hello World!")
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

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
    res.send(obj)
    }
})

console.log(process.env.MESSAGE_STYLE)


































 module.exports = app;

const express = require('express')
const app = express()
const port = 3000

// get is property of app/function
app.get('/', (req, res) => res.send('Hello World!'))

// listen is method which takes a port and a callback function
app.listen(port, () => console.log(`Example app listening on port ${port}/`))
console.log(`http://localhost:${3000}/`)

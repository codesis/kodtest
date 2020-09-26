const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = 'mongodb://localhost/kodtest'
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(db, dbOptions)
const visitkortRoutes = require('./routes/api/routes')

mongo.then(() => {
    console.log('Connected successfully!')
}, error => {
    console.log(error, 'An error occurred when connecting')
})

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Welcome to express'))

app.listen(port, function () {
    console.log('Running kodtest on port: ' + port)
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api', visitkortRoutes)

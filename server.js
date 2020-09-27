const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const visitkortRoutes = require('./routes/api/routes')
const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/visitkort', { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection

connection.once('open', function() {
    console.log("MongoDB database connection established successfully")
})

app.use('/visitkort', visitkortRoutes)
app.get('/', (req, res) => res.send('Welcome to express'))

app.listen(port, function () {
    console.log('Running kodtest on port: ' + port)
})

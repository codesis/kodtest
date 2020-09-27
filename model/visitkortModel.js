const mongoose = require('mongoose')
const { Schema } = mongoose

const Visitkort = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    telephone: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: Buffer,
    }
})

module.exports = mongoose.model('Visitkort', Visitkort)

const mongoose = require('mongoose')

const visitkortSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: Binary,
        required: true
    }
})

module.exports = Visitkort = mongoose.model('visitkort', visitkortSchema)

module.exports.get = function (callback, limit) {
    Visitkort.find(callback).limit(limit)
}

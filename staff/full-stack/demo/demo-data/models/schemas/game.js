const { Schema } = require('mongoose')

const game = new Schema({
    name: {
        type: String,
        required: true
    },
    released: {
        type: Date,
        required: true,
        default: new Date
    },
    description: {
        type: String
    },
    backgroundImage: {
        type: String
    },
    platform: {
        type: String
    },
    genres: {
        type: String
    }
})

module.exports = game
const { Schema } = require('mongoose')

const game = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    },
    platform: {
        type: Number
    },
    description: {
        type: String
    },
    released: {
        type: Date
    },
    background_image: {
        type: String
    }
})

module.exports = game
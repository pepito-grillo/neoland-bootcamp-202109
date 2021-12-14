const { Schema } = require('mongoose')

const platform = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    }
})

module.exports = platform
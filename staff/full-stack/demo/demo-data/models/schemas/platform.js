const { Schema } = require('mongoose')

const platform = new Schema({
    name: {
        type: String,
    }
})

module.exports = platform
const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const game = new Schema({
    name: {
        type: String,
    },
    platform: {
        type: ObjectId,
        ref: 'Platform'
    },
    description: {
        type: String
    },
    released: {
        type: Date
    },
    backgroundImage: {
        type: String
    }
})

module.exports = game
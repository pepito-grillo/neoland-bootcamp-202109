const { Schema, Types: { ObjectId } } = require('mongoose')
const note = require('./note')

const property = new Schema({
    cadastre: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owners: {
        type: [{
            type: ObjectId,
            ref: 'User'
        }],
        required: true
    },
    notes: {
        type: [note]
    }
})

module.exports = property
const { Schema } = require('mongoose')

const movie = new Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    image: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    plot: {
        type: String
    },
    genres: {
        type: String
    },
    ratings: {
        type: Number
    }
})

module.exports = movie
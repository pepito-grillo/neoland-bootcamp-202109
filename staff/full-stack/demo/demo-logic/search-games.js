const { models: { Game } } = require('demo-data')
const { validateQuery } = require('./helpers/validators')
const { NotFoundError } = require('demo-errors')

function searchGames(query) {
    debugger
    validateQuery(query)

    // const regex = new RegExp(`\\b[${query}]\\w*\\b`, 'gi')
    // console.log(query.match(regex))
    // $regex: `\\b[${query}]\\w*\\b`, $options: 'gi'
    const regex = new RegExp(query, 'i')

    return Game.find({ name: regex }).lean()
        .then(games => {
            if (!games) throw new NotFoundError(`game with that ${query} doesn't found`)

            return games
        })
}

module.exports = searchGames
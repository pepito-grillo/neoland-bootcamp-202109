const { models: { Game } } = require('demo-data')
const { validateQuery } = require('./helpers/validators')
const { NotFoundError } = require('demo-errors')

function searchGames(query) {
    validateQuery(query)

    // const regex = new RegExp(`\\b[${query}]\\w*\\b`, 'gi')
    // console.log(query.match(regex))
    // $regex: `\\b[${query}]\\w*\\b`, $options: 'gi'
    const regex = new RegExp(query, 'i')

    return Game.find({ name: regex }).lean()
        .then(games => {
            if (!games) throw new NotFoundError(`game with that ${query} doesn't found`)

            games.forEach(game => {
                delete game.__v
            })

            return games
        })
}

module.exports = searchGames
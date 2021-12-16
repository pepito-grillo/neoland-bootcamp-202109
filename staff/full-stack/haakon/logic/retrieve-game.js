const { models: { Game } } = require('data')
const { validateMongoId } = require('./helpers/validators')
const { NotFoundError } = require('customs-errors')

function retrieveGame(id) {
    validateMongoId(id)

    return Game.findById(id).lean()
        .then(game => {
            if (!game) throw new NotFoundError(`game with id ${id} not found`)

            game.id = game._id.toString()
            delete game._id
            delete game.platform
            delete game.__v

            return game
        })
}

module.exports = retrieveGame
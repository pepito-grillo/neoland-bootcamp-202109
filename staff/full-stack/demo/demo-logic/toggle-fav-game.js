const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('demo-errors')
const { models: { User } } = require('demo-data')

function toggleFavGame(userId, gameId) {
    validateId(userId)
    // Validate gameId
    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const gameFavs = { gameId }

            user.gameFavs.push(gameFavs)

            return user.save()
        })
        .then(() => { })
}

module.exports = toggleFavGame

// Comprobrar que el gameId existe
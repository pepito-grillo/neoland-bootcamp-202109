// const { validateId } = require('./helpers/validators')
// const { NotFoundError } = require('customs-errors')
// const { models: { User }, mongoose } = require('data')

// async function toggleFavGame(userId, gameId) {
//     debugger
//     validateId(userId)
//     // Validate gameId
//     const user = await User.findById({ userId })

//     if (!user) throw new NotFoundError(`user with id ${userId} not found`)

//     user.gameFavs = user.gameFavs.concat(gameId)

//     await user.save()
// }

// module.exports = toggleFavGame

// Comprobrar que el gameId existe
const { retrieveGame } = require('demo-logic')
const { handleError } = require('./helpers')

module.exports = (req, res) => {
    const { params: { gameId } } = req

    try {
        retrieveGame(gameId, (error, game) => {
            if (error) return handleError(error, res)

            res.json(game)
        })
    } catch (error) {
        handleError(error, res)
    }
}
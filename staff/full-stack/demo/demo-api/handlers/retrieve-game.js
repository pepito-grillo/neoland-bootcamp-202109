const { retrieveGame } = require('demo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { params: { gameId } } = req

    try {
        const game = await retrieveGame(gameId)
        res.json(game)
    } catch (error) {
        handleError(error, res)
    }
}
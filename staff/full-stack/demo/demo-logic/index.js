const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
const unregisterUser = require('./unregister-user')
const searchGames = require('./search-games')
const retrieveGame = require('./retrieve-game')
const toggleFavGame = require('./toggle-fav-game')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    unregisterUser,
    searchGames,
    retrieveGame,
    toggleFavGame
}
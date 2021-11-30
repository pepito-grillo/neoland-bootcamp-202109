const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
const unregisterUser = require('./unregister-user')
const searchVehicles = require('./search-vehicles')
const addCreditCardToUser = require('./add-credit-card-to-user')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    unregisterUser,
    searchVehicles,
    addCreditCardToUser
}
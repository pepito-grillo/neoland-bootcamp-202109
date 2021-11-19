const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
// const findUsers = require('./find-users')
const unregisterUser = require('./unregister-user')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    // findUsers,
    unregisterUser
}
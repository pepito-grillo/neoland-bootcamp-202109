const { validateName, validateUsername, validatePassword, validateCallback } = require('./helpers/validators')
const { ConflictError } = require('errors')
const { models: { User } } = require('data')

/**
 * TODO doc me
 * @param {*} name 
 * @param {*} username 
 * @param {*} password 
 * @param {*} callback 
 */
function registerUser(name, username, password) {
    validateName(name)
    validateUsername(username)
    validatePassword(password)

    return User.create({ name, username, password })
        .then(() => { })
        .catch(error => {
            if (error.code === 11000)
                throw new ConflictError(`user with username ${username} already exists`)

            throw error
        })
}

module.exports = registerUser
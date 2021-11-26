const context = require('./context')
const { validateName, validateUsername, validatePassword, validateCallback } = require('./helpers/validators')
const { ConflictError } = require('errors')

/**
 * TODO doc me
 * @param {*} name 
 * @param {*} username 
 * @param {*} password 
 * @param {*} callback 
 */
function registerUser(name, username, password, callback) {
    validateName(name)
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    const users = context.db.collection('users')

    users.insertOne({ name, username, password }, error => {
        if (error) {
            if (error.code === 11000)
                callback(new ConflictError(`user with username ${username} already exists`))
            else
                callback(error)

            return
        }

        callback(null)
    })
}

module.exports = registerUser
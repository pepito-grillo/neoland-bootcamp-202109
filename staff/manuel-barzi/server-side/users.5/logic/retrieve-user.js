const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateCallback } = require('./helpers/validators')

function retrieveUser(id, callback) {
    validateId(id)
    validateCallback(callback)

    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        user.id = user._id.toString()
        
        delete user._id

        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser
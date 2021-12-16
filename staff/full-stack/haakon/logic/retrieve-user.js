const { models: { User } } = require('data')
const { validateId, validateMongoId } = require('./helpers/validators')
const { NotFoundError } = require('customs-errors')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.id = user._id.toString()

            delete user._id

            delete user.password

            delete user.__v

            delete user.creditCards

            return user
        })
}

module.exports = retrieveUser
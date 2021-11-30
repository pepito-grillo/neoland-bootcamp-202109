const { models: { User } } = require('demo-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('demo-errors')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)

            user.id = user._id.toString()

            delete user._id

            delete user.password

            delete user.__v

            return user
        })
}

module.exports = retrieveUser
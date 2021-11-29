const { mongodb: { ObjectId } } = require('data')
const context = require('./context')
const { validateId, validateData, validateCallback } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('errors')

function modifyUser(id, data, callback) {
    validateId(id)
    validateData(data)
    validateCallback(callback)

    const users = context.db.collection('users')

    const filter = { _id: ObjectId(id) }

    users.findOne(filter, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new NotFoundError(`user with id ${id} not found`))

        const { password, oldPassword } = data

        if (password) {
            if (oldPassword !== user.password)
                return callback(new CredentialsError('wrong password'))
            else
                delete data.oldPassword
        }

        users.updateOne(filter, { $set: data }, error => {
            if (error) {
                if (error.code === 11000)
                    callback(new ConflictError(`user with username ${data.username} already exists`))
                else
                    callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = modifyUser
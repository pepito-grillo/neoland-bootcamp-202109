const { ObjectId } = require('mongodb')
const context = require('./context')

function modifyUser(id, data, callback) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new Error('id has blank spaces')
    if (id.length !== 24) throw new Error('id doesn\'t have 24 characters')

    if (typeof data !== 'object' || data.constructor.name !== 'Object') throw new TypeError('data is not an object')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const users = context.db.collection('users')

    const filter = { _id: ObjectId(id) }

    users.findOne(filter, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        const { password, oldPassword } = data

        if (password) {
            if (oldPassword !== user.password) 
                return callback(new Error('wrong password'))
            else
                delete data.oldPassword
        }

        users.updateOne(filter, { $set: data }, error => {
            if (error) {
                if (error.code === 11000)
                    callback(new Error(`user with username ${data.username} already exists`))
                else
                    callback(error)
    
                return
            }

            callback(null)
        })
    })
}

module.exports = modifyUser
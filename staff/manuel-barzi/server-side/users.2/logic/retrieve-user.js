const { readFile } = require('fs')

function retrieveUser(id, callback) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.id === id)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        delete user.id
        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser
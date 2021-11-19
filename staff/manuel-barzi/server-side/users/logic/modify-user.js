const { readFile, writeFile } = require('fs')

function modifyUser(id, data, callback) { // data => { name: ?, username: ?, password: ? }
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')

    if (typeof data !== 'object') throw new TypeError('data is not an object')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.id === id)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        const { username, password, oldPassword } = data

        if (username) {
            const exists = users.some(user => user.username === username)

            if (exists) return callback(new Error('username already exists'))

            user.username = username
        }

        if (password) {
            if (oldPassword !== user.password) return callback(new Error('wrong password'))

            user.password = password
        }

        for (const property in data)
            if (property !== 'username' && property !== 'password' && property !== 'oldPassword')
                user[property] = data[property]

        const json2 = JSON.stringify(users, null, 4)

        writeFile(`${__dirname}/../users.json`, json2, error => {
            if (error) return callback(error)

            callback(null)
        })
    })
}

module.exports = modifyUser
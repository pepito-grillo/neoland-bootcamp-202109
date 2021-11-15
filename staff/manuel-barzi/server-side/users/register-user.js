const { readFile, writeFile } = require('fs')

function registerUser(name, username, password, callback) {
    readFile('./users.json', 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.username === username)

        if (user) return callback(new Error(`user with username ${username} already exists`))

        users.push({ id: Date.now().toString(36), name, username, password })

        const json2 = JSON.stringify(users, null, 4)

        writeFile('./users.json', json2, error => {
            if (error) return callback(error)

            callback()
        })
    })
}

module.exports = registerUser
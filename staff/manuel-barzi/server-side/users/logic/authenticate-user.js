const { readFile } = require('fs')

function authenticateUser(username, password, callback) {
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.username === username && user.password === password)

        if (!user) return callback(new Error('wrong credentials'))

        callback(null, user.id)
    })
}

module.exports = authenticateUser
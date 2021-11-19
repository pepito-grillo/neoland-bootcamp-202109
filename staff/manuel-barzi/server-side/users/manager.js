const { registerUser, unregisterUser, authenticateUser, retrieveUser } = require('./logic')

const { argv: [, , command] } = process

if (command === 'register') { // $ node manager register "Peter Pan" peterpan 123123123
    const { argv: [, , , name, username, password] } = process

    registerUser(name, username, password, error => {
        if (error) return console.log(error.message)

        console.log('user registered')
    })
} else if (command === 'unregister') { // $ node manager unregister kw0mnxlk 123123123
    const { argv: [, , , id, password] } = process

    unregisterUser(id, password, error => {
        if (error) return console.log(error.message)

        console.log(`user with ${id} unregistered`)
    })
} else if (command === 'retrieve') { // $ node manager retrieve kw0ms3h9
    const { argv: [, , , id] } = process

    retrieveUser(id, (error, user) => {
        if (error) return console.log(error.message)

        console.log(`user ${user.name} retrieved`)
    })
} else if (command === 'find') { // $ node manager find pan
    // TODO implement me
} else if (command === 'modify') { // $ node manager modify kw0ms3h9 . . 123123123:234234234
    // $ node manager modify kw0ms3h9 "Juanito Perez" . .
    // TODO implement me
} else if (command === 'authenticate') { // $ node manager authenticate <username> <password>
    const { argv: [, , , username, password] } = process

    authenticateUser(username, password, (error, id) => {
        if (error) return console.log(error.message)

        console.log(`user with ${id} authenticated`)
    })
}
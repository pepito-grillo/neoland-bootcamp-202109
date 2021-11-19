require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser } = require('users')
const { searchVehicles } = require('vehicles')

const { env: { PORT }, argv: [, , port = PORT || 8080] } = process

const server = express()

const jsonBodyParser = bodyParser.json()

server.post('/api/users', jsonBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    try {
        registerUser(name, username, password, function (error) {
            if (error) return res.status(409).json({ error: error.message })

            res.status(201).send()
        })
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
})



// server.post('/signin', jsonBodyParser, (req, res) => {
//     const { headers: { cookie } } = req

//     const id = getUserId(cookie)

//     if (id) return res.redirect('/')

//     const { body: { username, password } } = req

//     try {
//         authenticateUser(username, password, (error, id) => {
//             if (error)
//                 return res.send(signIn({ username, feedback: error.message }))

//             res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)

//             res.redirect('/')
//         })
//     } catch (error) {
//         return res.send(signIn({ username, feedback: error.message }))
//     }
// })

// server.all('*', (req, res) => {
//     res.send(fail({ message: 'sorry, this page isn\'t available' }))
// })

server.listen(port, () => console.log(`server up and listening on port ${port}`))
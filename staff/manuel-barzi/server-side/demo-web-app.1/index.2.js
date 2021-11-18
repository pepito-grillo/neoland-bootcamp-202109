const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser } = require('users')
const { landing, signUp, postSignUp, signIn, home, fail } = require('./components')

const server = express()

server.use(express.static('public')) // middleware

server.get('/', (req, res) => {
    const { headers: { cookie } } = req

    if (cookie) {
        const [, id] = cookie.split('=')

        if (id) {
            return retrieveUser(id, (error, user) => {
                if (error)
                    return res.send(fail({ message: error.message }))

                res.send(home({ name: user.name }))
            })
        }
    }

    res.send(landing())
})

server.get('/signup', (req, res) => { // http://localhost:8000/signup
    const { headers: { cookie } } = req

    if (cookie) {
        const [, id] = cookie.split('=')

        if (id)
            return res.redirect('/')
    }

    res.send(signUp())
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

server.post('/signup', formBodyParser, (req, res) => {
    const { headers: { cookie } } = req

    if (cookie) {
        const [, id] = cookie.split('=')

        if (id)
            return res.redirect('/')
    }

    const { body: { name, username, password } } = req

    try {
        registerUser(name, username, password, function (error) {
            if (error) return res.send(signUp({ name, username, feedback: error.message }))

            res.send(postSignUp())
        })
    } catch (error) {
        if (error) return res.send(signUp({ name, username, feedback: error.message }))
    }
})

server.get('/signin', (req, res) => {
    const { headers: { cookie } } = req

    if (cookie) {
        const [, id] = cookie.split('=')

        if (id)
            return res.redirect('/')
    }

    res.send(signIn())
})

server.post('/signin', formBodyParser, (req, res) => {
    const { headers: { cookie } } = req

    if (cookie) {
        const [, id] = cookie.split('=')

        if (id)
            return res.redirect('/')
    }

    const { body: { username, password } } = req

    try {
        authenticateUser(username, password, (error, id) => {
            if (error)
                return res.send(signIn({ username, feedback: error.message }))

            res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)

            res.redirect('/')
        })
    } catch (error) {
        return res.send(signIn({ username, feedback: error.message }))
    }
})

server.post('/signout', (req, res) => {
    res.setHeader('Set-Cookie', `user-id=null; Max-Age=0`)

    res.redirect('/')
})

server.all('*', (req, res) => {
    res.send(fail({ message: 'sorry, this page isn\'t available' }))
})

server.listen(8000)
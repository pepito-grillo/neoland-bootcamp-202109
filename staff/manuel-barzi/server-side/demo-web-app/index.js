const express = require('express')
const bodyParser = require('body-parser')
const { registerUser } = require('users')

const server = express()

server.use(express.static('public')) // middleware

server.get('/hello', (req, res) => { // http://localhost:8000/hello?name=Pepito => html saluting Pepito
    const name = req.query.name

    const userAgent = req.headers['user-agent']

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Hello, ${name}!</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello, ${name}!</h1>
        <p>You've connected to this server using the client ${userAgent}.
    </body>
    </html>`)

})

server.get('/signup', (req, res) => { // http://localhost:8000/signup
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,  initial-scale=1.0">
            <title>Sign up | Demo Web-App</title>
        
            <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>Demo Web-App</h1>
            <h1>Sign up</h1>
            <form method="POST" action="/signup">
                <input type="text" name="name" placeholder="name">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button>Sign up</button>
            </form>
        </body>
        </html>`)
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

server.post('/signup', formBodyParser, (req, res) => {
    // const name = req.body.name
    // const username = req.body.username
    // const password = req.body.password
    const { body: { name, username, password } } = req

    registerUser(name, username, password, function (error) {
        if (error) {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign up | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Sorry 🤡🎈</h1>

                <p>${error.message}</p>

                <a href="/signup">Try again</a>.
            </body>
            </html>`)

            return
        }

        res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign up | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>User successfully registered</h1>

                <p>You can proceed to <a href="/signin">sign in</a>.</p>
            </body>
            </html>`)
    })
})

server.get('/signin', (req, res) => {
    res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign in | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>TODO implement me</h1>
            </body>
            </html>`)
})

server.listen(8000)
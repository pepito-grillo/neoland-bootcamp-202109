const express = require('express')
const bodyParser = require('body-parser')
const { registerUser, authenticateUser, retrieveUser } = require('users')

const server = express()

server.use(express.static('public')) // middleware

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
                <input type="text" name="name" placeholder="name" required>
                <input type="text" name="username" placeholder="username" required>
                <input type="password" name="password" placeholder="password" required minlength="8">
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

    try {
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
                    <h1>Demo Web-App</h1>
                    <h1>Sign up</h1>
                    <form method="POST" action="/signup">
                        <input type="text" name="name" placeholder="name" ${name ? `value="${name}"` : ''} required>
                        <input type="text" name="username" placeholder="username" ${username ? `value="${username}"` : ''} required>
                        <input type="password" name="password" placeholder="password" required minlength="8">
                        <p>${error.message}</p>
                        <button>Sign up</button>
                    </form>
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

                    <p>You can proceed to <a href="/signin">Sign in</a>.</p>
                </body>
                </html>`)
        })
    } catch (error) {
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
                <input type="text" name="name" placeholder="name" ${name ? `value="${name}"` : ''} required>
                <input type="text" name="username" placeholder="username" ${username ? `value="${username}"` : ''} required>
                <input type="password" name="password" placeholder="password" required minlength="8">
                <p>${error.message}</p>
                <button>Sign up</button>
            </form>
        </body>
        </html>`)
    }
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
            <h1>Demo Web-App</h1>
            <h1>Sign in</h1>
            <form method="POST" action="/signin">
                <input type="text" name="username" placeholder="username" required>
                <input type="password" name="password" placeholder="password" required minlength="8">
                <button>Sign in</button>
            </form>
        </body>
        </html>`)
})

server.post('/signin', formBodyParser, (req, res) => {
    const { body: { username, password } } = req

    try {
        authenticateUser(username, password, (error, id) => {
            if (error)
                return res.send(`<!DOCTYPE html>
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
                    <h1>Demo Web-App</h1>
                    <h1>Sign in</h1>
                    <form class="signin" method="POST" action="/signin">
                        <input type="text" name="username" placeholder="username" ${username ? `value="${username}"` : ''} required>
                        <input type="password" name="password" placeholder="password" required minlength="8">
                        <span class="signin__feedback signin__feedback-error">${error.message}</span>
                        <button>Sign in</button>
                    </form>
                </body>
                </html>`)

            res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)

            res.redirect('/private')
        })

        server.get('/private', (req, res) => {
            const { headers: { cookie } } = req

            if (!cookie) return res.redirect('/')

            const [, id] = cookie.split('=')

            retrieveUser(id, (error, user) => {
                if (error)
                    return res.send(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                        <title>Private | Demo Web-App</title>
                    
                        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                        <link rel="stylesheet" href="style.css">
                    </head>
                    <body>
                        <h1>${error.message}</h1>
                    </body>
                    </html>`)

                res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                    <title>Private | Demo Web-App</title>
                
                    <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    <h1>Hello, ${user.name}!</h1>
                </body>
                </html>`)
            })
        })
    } catch (error) {
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
            <h1>Demo Web-App</h1>
            <h1>Sign in</h1>
            <form class="signin" method="POST" action="/signin">
                <input type="text" name="username" placeholder="username" ${username ? `value="${username}"` : ''} required>
                <input type="password" name="password" placeholder="password" required minlength="8">
                <span class="signin__feedback signin__feedback-error">${error.message}</span>
                <button>Sign in</button>
            </form>
        </body>
        </html>`)
    }
})

server.listen(8000)
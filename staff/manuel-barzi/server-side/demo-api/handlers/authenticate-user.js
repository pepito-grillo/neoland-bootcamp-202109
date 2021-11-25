const { authenticateUser } = require('users')
const { CredentialsError, FormatError } = require('errors')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { body: { username, password } } = req

    try {
        authenticateUser(username, password, (error, id) => {
            if (error) {
                let status = 500

                if (error instanceof CredentialsError)
                    status = 401

                return res.status(status).json({ error: error.message })
            }

            const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET)

            res.json({ token })
        })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}
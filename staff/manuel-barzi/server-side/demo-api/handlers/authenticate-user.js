const { authenticateUser } = require('users')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { username, password } } = req

    try {
        authenticateUser(username, password, (error, id) => {
            if (error) return handleError(error, res)

            const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET)

            res.json({ token })
        })
    } catch (error) {
        handleError(error, res)
    }
}
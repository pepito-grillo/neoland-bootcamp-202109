const { retrieveUser } = require('users')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    debugger
    try {
        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        retrieveUser(id, (error, user) => {
            if (error) return handleError(error, res)

            res.json(user)
        })
    } catch (error) {
        handleError(error, res)
    }
}
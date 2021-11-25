const { retrieveUser } = require('users')
const { FormatError, NotFoundError } = require('errors')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    try {
        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        retrieveUser(id, (error, user) => {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404

                return res.status(status).json({ error: error.message })
            }

            res.json(user)
        })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400

        res.status(status).json({ error: error.message })
    }
}
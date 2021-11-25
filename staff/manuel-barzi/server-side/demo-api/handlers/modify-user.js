const { modifyUser } = require('users')
const { CredentialsError, ConflictError, FormatError, NotFoundError } = require('errors')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { headers: { authorization }, body: data } = req

    try {
        const [, token] = authorization.split(' ')

        const { sub: id } = jwt.verify(token, SECRET)

        modifyUser(id, data, function (error) {
            if (error) {
                let status = 500

                if (error instanceof NotFoundError)
                    status = 404
                else if (error instanceof ConflictError)
                    status = 409
                else if (error instanceof CredentialsError)
                    status = 401

                return res.status(status).json({ error: error.message })
            }

            res.status(201).send()
        })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof FormatError)
            status = 400
        else if (error instanceof ConflictError)
            status = 409

        res.status(status).json({ error: error.message })
    }
}
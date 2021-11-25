const { registerUser } = require('users')
const { ConflictError, FormatError } = require('errors')

module.exports = (req, res) => {
    const { body: { name, username, password } } = req

    try {
        registerUser(name, username, password, function (error) {
            if (error) {
                let status = 500

                if (error instanceof ConflictError)
                    status = 409

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
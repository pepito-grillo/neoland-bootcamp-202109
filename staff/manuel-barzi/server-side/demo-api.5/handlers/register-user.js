const { registerUser } = require('users')
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { name, username, password } } = req

    try {
        registerUser(name, username, password, function (error) {
            if (error) return handleError(error, res)

            res.status(201).send()
        })
    } catch (error) {
        handleError(error, res)
    }
}
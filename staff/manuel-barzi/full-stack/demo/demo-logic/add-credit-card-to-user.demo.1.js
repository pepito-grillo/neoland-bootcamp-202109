require('dotenv').config()

const addCreditCardToUser = require('./add-credit-card-to-user')
const { mongoose, models: { User } } = require('demo-data')

const { env: { MONGO_URL } } = process

mongoose.connect(MONGO_URL)
    .then(() => User.deleteMany())
    .then(() => {
        const user = {
            name: 'Wendy Pan',
            username: 'wendypan',
            password: '123123123'
        }

        return User.create(user)
            .then(user => {
                const number = '0123012301230123', expirationDate = new Date(2022, 0, 1), cvv = '056'

                return addCreditCardToUser(user.id, user.name, number, expirationDate, cvv)
            })
    })
    //.then(() => User.deleteMany())
    .then(() => mongoose.disconnect())
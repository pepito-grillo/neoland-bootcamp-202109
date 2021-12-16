require('dotenv').config()

const addCreditCardToUser = require('./add-credit-card-to-user')
const { mongoose, models: { User } } = require('demo-data')

const { env: { MONGO_URL } } = process

    ; (async () => {
        await mongoose.connect(MONGO_URL)

        await User.deleteMany()

        const user = {
            name: 'Wendy Pan',
            username: 'wendypan',
            password: '123123123'
        }

        const user2 = await User.create(user)

        const number = '0123012301230123', expirationDate = new Date(2022, 0, 1), cvv = '056'

        await addCreditCardToUser(user2.id, user2.name, number, expirationDate, cvv)

        await mongoose.disconnect()
    })() // IIFE
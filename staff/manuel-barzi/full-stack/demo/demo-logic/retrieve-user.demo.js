require('dotenv').config()

const retrieveUser = require('./retrieve-user')
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

        const user3 = await retrieveUser(user2.id)

        debugger

        await mongoose.disconnect()
    })() // IIFE
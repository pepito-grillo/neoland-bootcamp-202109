const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
// const client = new MongoClient('mongodb+srv://manuelbarzi:123123123@cluster0.yuse3.mongodb.net')

client.connect()
    .then(() => {
        const demo = client.db('demo')

        const users = demo.collection('users')

        // return users.createIndex({ username: 1 }, { unique: true })
        //     .then(() => {
        return users.insertOne({ name: 'Coco Drilo', username: 'cocodrilo', password: '123123123 ' })
            .then(() => {
                return users.find({}).toArray()
            })
            .then(users => {
                console.table(users)
                //client.close()
            })
    })
    // })
    .catch(error => {
        // debugger
        if (error.code === 11000) console.log('username already exists')
        else console.error(error)
    })
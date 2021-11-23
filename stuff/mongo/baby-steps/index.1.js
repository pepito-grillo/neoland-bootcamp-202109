const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
// const client = new MongoClient('mongodb+srv://manuelbarzi:123123123@cluster0.yuse3.mongodb.net')

client.connect(error => {
    if (error) return console.error(error)

    const demo = client.db('demo')

    const users = demo.collection('users')

    // users.insertOne({ name: 'Coco Drilo', username: 'cocodrilo', password: '123123123 '}, error => {
    //     if (error) return console.error(error)

    //     users.find({}).toArray((error, users) => {
    //         if (error) return console.error(error)

    //         console.table(users)

    //         //client.close()
    //     })
    // })

    // users.deleteOne({ username: 'cocodrilo'}, error => {
    //     if (error) return console.error(error)

    //     users.find({}).toArray((error, users) => {
    //         if (error) return console.error(error)

    //         console.table(users)

    //         //client.close()
    //     })
    // })

    // users.deleteOne({ username: 'cocodrilo'}, error => {
    //     if (error) return console.error(error)

    //     users.find({}).toArray((error, users) => {
    //         if (error) return console.error(error)

    //         console.table(users)

    //         //client.close()
    //     })
    // })

    users.updateOne({ username: 'pepigri' }, { $set: { age: 22 } }, error => {
        if (error) return console.error(error)

        users.find({}).toArray((error, users) => {
            if (error) return console.error(error)

            console.table(users)

            //client.close()
        })
    })
})
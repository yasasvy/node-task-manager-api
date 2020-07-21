// CRUD create read update delete

const  { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log("Unable to connect to database!")
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Surekha',
    //     age: 21
    // }, (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Teja",
    //         age: 20
    //     }, {
    //         name: "Yasasvy",
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert documents!")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "clean the house",
    //         completed: false
    //     }, {
    //         description: "wash the car",
    //         completed: true
    //     }, {
    //         description: "pot the plants",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert tasks!")
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').findOne({_id: new ObjectID("5ef99a87b15d1204a899e6a4")}, (error, user) => {
    //     if(error) {
    //         return console.log("Unable to find user!")
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age: 21}).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({age: 21}).count((error, count) => {
    //     console.log(count)
    // })
    // db.collection('tasks').findOne({_id: new ObjectID("5ef9922f1c5d522ba09d3769")}, (error, task) => {
    //     console.log(task)
    // })
    // db.collection('tasks').find({completed: true}).toArray((err, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ef98f0a6260c61c5c0084be")
    // }, {
    //     $set: {
    //         name: "Supriya"
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     completed: null
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "clean the house"
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


})
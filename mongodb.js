// CRUD create read update delete

const { MongoClient, ObjectID} = require('mongodb')

const connecttionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connecttionURL, { useNewUrlParser: true} , (error, client) => {
    if(error) {
        return console.log("DB connection failed!")
    }
    
    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        status: true
    }, {
        $set: {
            status: false
        }
    }).then((success)=> {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })

})
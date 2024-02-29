const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const database = 'e-comm'
const client = new MongoClient(url)

async function dbConnect(){
    let result = await client.connect(url)
    let db =  result.db(database)
    console.log('DB connected')
    return db.collection('products')
}

module.exports = dbConnect
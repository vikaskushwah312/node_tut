const dbConnect= require('./mongodb');

async function main(){
    let data =   await dbConnect()
    data = await data.find().toArray();
    console.log('dfd',data)
}
main()


//Basic way to connect db

// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'
// const database = 'e-comm';
// const client = new MongoClient(url)
 
// async function getdata(){
//     let result = await client.connect()
//     let db = result.db(database)
//     let collection = db.collection('products')
//     let response = await collection.find().toArray()
//     console.log('Your response is ',response)
// }

// getdata()


const dbConnect= require('./mongodb');

const deleteone = async () => {
     let collection = await dbConnect()
     let result = await collection.deleteOne({"name":"realme"})
     console.log(result)
}

// deleteone()

const deletemany = async () => {
    let collection = await dbConnect()
    let result = await collection.deleteMany({"price":2500})
    console.log(result)
}

deletemany()
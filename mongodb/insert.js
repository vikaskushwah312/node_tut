const dbConnect= require('./mongodb');

const insert = async () => {
    let collection = await dbConnect()
    let result = await collection.insertOne({"name":"realme", "price":2500, "category":"mobile" })
    console.log(result)
}
// insert()

const insertmany = async () => {
    let collection = await dbConnect()
    let resultmany = await collection.insertMany(
        [
            {"name":"realme2", "price":25010, "category":"mobile" },
            {"name":"realme3", "price":25020, "category":"mobile" },
            {"name":"realme4", "price":25030, "category":"mobile" }
        ]
    )
    if(insertmany.acknowledged){
        console.log('insert Succfully done')
    }
    console.log(resultmany)
}
insertmany()

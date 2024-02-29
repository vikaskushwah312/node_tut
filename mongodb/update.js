const dbConnect= require('./mongodb');

const updateone = async ()=>{
    const collection = await dbConnect()
    let result = await collection.updateOne(
        {"name": "realme"},
        {$set : {"price":255, "category":"mo"}}
    )
    console.log(result)
}

//updateone()

const updatemany = async ()=>{
    const collection = await dbConnect()
    let result = await collection.updateMany(
        {"name": "realme"},
        {$set : {"price":255, "category":"mo"}}
    )
    console.log(result)
}
updatemany()
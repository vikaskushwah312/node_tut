const express =  require('express')
const dbConnect = require('./mongodb')
const { ObjectId } = require('mongodb');
const app =  express()
app.use(express.json())

//Update the data into database
app.put('/update', async (req, resp)=>{
    let data = await dbConnect()
    const updateData = { ...req.body }; // Create a copy of req.body
    delete updateData._id; // Remove _id field from the update object

    let res =  await data.updateOne(
        {_id: new ObjectId(req.body._id)},
        {$set: updateData}
    )
    resp.send(res)
    
})
//Insert thd data into database
app.post('/insert', async (req, resp)=>{
    let data = await dbConnect()
    let res = await data.insertOne(req.body)
    if(res.acknowledged){
        resp.send('Data Succefully Insert')
    }
    resp.send('Something went Worng')
})
//to get the data
app.get('/',async (req,resp) => {
    let data = await dbConnect()
    data = await data.find().sort({ _id: -1 }).toArray()
    console.log(data)
    resp.send(data)
    
})

//To delete the records using there id
app.delete('/delete/:id', async(req, resp)=>{
    let data = await dbConnect()
    // console.log('first', req.params.id)
    data =  await data.deleteOne({_id: new ObjectId(req.params.id)})
    resp.send(data)
})


app.listen(4200)
const express =  require('express')
const Product =  require('./product')
require('./config')
const app  = express()

app.use(express.json())

app.get('', async (req, resp)=>{
    let data = await Product.find()
    resp.send(data)
})
app.post('/insert',async (req, resp)=>{

    let data =  new Product(req.body)
    const result = await data.save();
    resp.send(result)
})
app.put('/update/:_id',async (req, resp)=>{

    let data =  await Product.updateOne(
        {"_id":req.params},
        {$set: req.body}
        )
    resp.send(data)
})

app.delete("/delete/:_id", async(req, resp)=>{
    let data = await Product.deleteOne(req.params)
    resp.send(data)
})

app.listen(4200)
const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')

//Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category : String
})
//Model
const Product = mongoose.model('products',productSchema)

const saveInDb = async() =>{

    let data = new Product({
        name: "max10",
        price: 250,
        brand: 'maxx',
        category: "Mobile"
    })
    const result = await data.save()
    console.log(result)
}

saveInDb()


const express =  require('express')
const app = express()
const EventEmitter =  require('events')
const event =  new EventEmitter()

let count = 0

event.on("countApi",()=>{
    count++
    console.log('event called', count)
})

app.get('/',(req, resp)=>{
    resp.send(`api called ${count}`)
    event.emit('countApi')
})

app.listen(4200)
const express=require('express')

const app=express()
const Store =require('./Store')
const cors=require('cors')

app.use(cors({
    origin:"*"
}))
app.get('/store', (req,res)=>{
    res.send(Store)
})

app.get('/store/:id',(req,res)=>{
    const itemId = req.params.id;
    const item = Store.find(item => item.id === itemId);
    res.json(item)
})


app.listen(4000,(req,res)=>{
    console.log("server started")
})
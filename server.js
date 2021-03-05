const express = require('express')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.get('/cart',(req,res)=>{
    res.send("this is cart")
})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.listen(3001,()=>{
    console.log('server is running at port 3001')
})
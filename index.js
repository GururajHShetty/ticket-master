const express = require('express')
const path = require('path') 
const app=express()
const port = process.env.PORT || 3020
const mongoose = require('./config/database')
const router = require('./config/routes')

const cors = require('cors')
app.use(cors())

app.use(express.json())

// app.get('/',(req,res)=>{
//     res.json({
//         notice:'Welcome to ticket master'
//     })
// })

app.use('/',router)

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 


app.listen(port,() => {
    console.log('listening on port',port)
})
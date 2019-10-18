const express = require('express')
const app=express()
const port = 3020
const mongoose = require('./config/database')
const router = require('./config/routes')

const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        notice:'Welcome to ticket master'
    })
})

app.use('/',router)

app.listen(port,() => {
    console.log('listening on port',port)
})
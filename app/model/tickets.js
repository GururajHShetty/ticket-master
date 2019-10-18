const mongoose=require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    code:{
        type:Number,
        default:Number(Date.now())
    },
    customerName : {
        type : String,
        required:true
    },
    department:{
        type : String,
        required:true,
        ref:'Department'
    },
    employee:{
        type : String,
        required:true
    },
    priority:{
        type : String,
        required:true
    },
    message:{
        type : String,
        required:true
    },
    status:{
        type:String
    },
    remarks:{
        type:String
    }
})

const Ticket = mongoose.model('Ticket',ticketSchema)
module.exports = Ticket
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    code: {
        type: Number,
        default: Number(Date.now())
    },
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer' 
    },
    title: {
        type: String,
        required:true
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    }, 
    employee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    priority: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required:true
    },
    resolution: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)
module.exports = Ticket
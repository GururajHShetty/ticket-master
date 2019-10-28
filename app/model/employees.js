const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true
    },
    mobile : {
        type : Number,
        required:true
    },
    department : { 
        type : Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Employee = mongoose.model('Employee' , employeeSchema)
 module.exports = Employee
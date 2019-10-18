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
        type : String,
        required:true,
        ref:'Department'
    }
})

const Employee = mongoose.model('Employee' , employeeSchema)
 module.exports = Employee
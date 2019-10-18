const Employee = require('../model/employees')

module.exports.list = (req,res) => {

    Employee.find().populate('department')
    .then(employees => {
        res.json(employees)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const {body} = req

    const employee = new Employee(body)

    employee.save()
    .then(employee => {
        res.json(employee)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.destroy = (req,res) => {
    const {id} = req.params
    console.log(id);
    
    Employee.findByIdAndDelete(id)
    .then(employee => {
        res.json(employee)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.show = (req,res) => {
    const {id} = req.params

    Employee.findById(id).populate('department')
    .then(employee => {
        res.json(employee)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const {id} = req.params
    const {body} = req

    Employee.findByIdAndUpdate(id,body,{new:true})
    .then(employee => {
        if(employee){
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch(err => {
        res.json(err)
    })
}
const Department = require('../model/department')

module.exports.list = (req,res) => {
     Department.find({userId : req.user._id})
     .then(departments => {
         res.json(departments)
     })
     .catch(err => {
         res.json(err)
     })
}

module.exports.create = (req,res) => {
    const {body} = req
    const department = new Department(body)
    department.userId = req.user._id

    department.save()
    .then(department => {
        res.json(department)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.destroy = (req,res) => {
    const {id} = req.params

    Department.findByIdAndDelete(id)
    .then(department => {
        res.json(department)
    })
    .catch(err => {
        res.json(err)
    })
}
const Customer = require('../model/customer')

module.exports.list = (req, res) => {
    Customer.find({userId : req.user._id})
        .then(customers => {
            res.json(customers)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const { body,user } = req
    const customer = new Customer(body)
    customer.userId = user._id
    customer.save()
        .then(customer => {
            res.json(customer)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {id} = req.params

    Customer.findById(id)
    .then(customer => {
        res.json(customer)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.destroy = (req,res) => {
    const {id} = req.params

    Customer.findByIdAndDelete(id)
    .then(customer => {
        res.json({notice:"success",customer})
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const {id} = req.params
    const {body} = req
// console.log(id,body)
    Customer.findByIdAndUpdate(id,body,{new:true})
    .then(customer => {
        if(customer){
        res.json(customer)
    } else {
        res.json({})
    }
    // res.json("success")
    })
    .catch(err => {
        res.json(err)
    })
}
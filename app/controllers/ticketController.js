const Ticket = require('../model/tickets')

module.exports.list = (req,res) => {
    const id = req.query.code
    if(!id) {
    Ticket.find()
    .then(tickets => {
        res.json(tickets)
    })
    .catch(err => {
        res.json(err)
    })
    } else {
        Ticket.findOne({code : id})
        .then(ticket => {
            res.json(ticket)
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports.create = (req,res) => {
    const {body} = req
    body.status = 'open'
    console.log(body);
    
    const ticket = new Ticket(body)
// console.log(ticket);

    ticket.save()
    .then(ticket => {
        res.json(ticket)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const {id} = req.params    
    const {body} = req
    Ticket.findOne({code:id})
    .then(ticket => {
        if(ticket){
    const id = ticket._id
    Ticket.findByIdAndUpdate(id,body,{new:true})
    .then(ticket => {
        res.json(ticket)
    })
    .catch(err => {
        res.json(err)
    })}
    })
}
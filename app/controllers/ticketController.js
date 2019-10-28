const Ticket = require('../model/tickets')

module.exports.list = (req, res) => {
    Ticket.find({userId : req.user._id}).populate('department customer employee')
        .then(tickets => {
            if (tickets) {
                res.json(tickets)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.create = (req, res) => {
    const { body, user } = req
    body.status = 'open'
    // console.log(body)

    const ticket = new Ticket(body)
    // console.log(ticket);
    ticket.userId = user._id
    ticket.status = 'Open'

    ticket.save()
        .then(ticket => {
            res.json(ticket)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const { id } = req.params
    const { body } = req
    Ticket.findOne({ code: id })
        .then(ticket => {
            if (ticket) {
                const id = ticket._id
                Ticket.findByIdAndUpdate(id, body, { new: true })
                    .then(ticket => {
                        res.json(ticket)
                    })
                    .catch(err => {
                        res.json(err)
                    })
            }
        })
}

module.exports.destroy = (req, res) => {
    const {id} = req.params

    Ticket.findByIdAndDelete(id)
        .then(ticket => {
            res.json({ notice: "success", ticket })
        })
        .catch(err => {
            res.json(err)
        })
}
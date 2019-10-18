const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ticket-master-app',{ useUnifiedTopology: true, useNewUrlParser: true  })
    .then(() => {
        console.log('successfully connected to database')
    })
    .catch(() => {
        console.log('error while connecting')
    })

    module.exports = mongoose
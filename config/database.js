const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://gururajhshetty:Guru%401421@cluster0-a90ax.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true  })
    .then(() => {
        console.log('successfully connected to database')
    })
    .catch(() => {
        console.log('error while connecting')
    })

    module.exports = mongoose
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongo "mongodb+srv://cluster0-a90ax.mongodb.net/test"  --username gururajhshetty',{ useUnifiedTopology: true, useNewUrlParser: true  })
    .then(() => {
        console.log('successfully connected to database')
    })
    .catch(() => {
        console.log('error while connecting')
    })

    module.exports = mongoose
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://gururajhshetty5:Guru1421@cluster0-shard-00-00-a90ax.mongodb.net:27017,cluster0-shard-00-01-a90ax.mongodb.net:27017,cluster0-shard-00-02-a90ax.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => {
        console.log('successfully connected to database')
    })
    .catch(() => {
        console.log('error while connecting')
    })

    module.exports = mongoose
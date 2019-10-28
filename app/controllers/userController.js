const { User } = require('../model/User')
const pick = require('lodash/pick')

module.exports.registor = (req, res) => {
    const { body } = req
    const user = new User(body)
    user.save()
        .then(user => {
            res.json(pick(user, ['_id', 'username', 'email']))
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.login = (req, res) => {
    const { email, password } = req.body
    let userInfo
    User.findByCredentials(email, password)
        .then(user => {
            // console.log(user)
            userInfo = user
            return user.generateToken()

        })
        .then(token => {
            // console.log(token)
            res.json({
                token, user: {
                    _id: userInfo._id,
                    username: userInfo.username,
                    emial: userInfo.email
                }
            })
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.logout = (req, res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(() => {
            res.send('successfully logged out')
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.account = (req, res) => {
    const { user } = req
    res.send(pick(user, ['_id', 'username', 'email']))
}

// module.exports.redirect = (req, res) => {
//     res.redirect('http://localhost:3000/users/login')
// }
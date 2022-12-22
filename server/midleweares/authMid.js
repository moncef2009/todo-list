
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authorization = async (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) {
        res.status(401).json({ message: 'no token' })
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decode.id)
    next()
}

module.exports = { authorization } 
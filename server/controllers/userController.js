const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const maxAge = 3 * 24 * 60 * 60
const genToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge })
}


const register = asyncHandler(async (req, res) => {
    try {
        const email = req.body.email
        const user = await User.create({ email })
        const token = genToken(user._id)

        res.cookie('jwt', token, {
            maxAge: maxAge * 1000
        })
            .status(201).json({ user })
    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
})

const login = asyncHandler(async (req, res) => {
    try {
        const email = req.body.email
        const user = await User.findOne({ email })
        const token = genToken(user._id)

        res.cookie('jwt', token, {
            maxAge: maxAge * 1000
        })
            .status(200).json({ user })
    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
})

const logout = asyncHandler(async (req, res) => {
    try {
        res.clearCookie('jwt').send('ok')
    } catch (error) {
        res.json({ 'error': error.message })
    }
})


module.exports = { register, login, logout }
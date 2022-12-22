const mongoose = require('mongoose')
const { isEmail } = require('validator')


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: isEmail
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User
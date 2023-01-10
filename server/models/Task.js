const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        createdAt: {
            type: Date,
            required: true
        },
        deadline: {
            type: Date,
        }
        ,
        complet: {
            type: Boolean,
            default: false
        }
    },

)

module.exports = mongoose.model('Task', taskSchema)
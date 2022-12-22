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
            required: [true, 'enter un titre stp'],
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', taskSchema)
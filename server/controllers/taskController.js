const asyncHandler = require('express-async-handler')
const Task = require('../models/Task')


const getTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
)

const setTask = asyncHandler(async (req, res) => {
    const title = req.body.title
    if (!req.body.title) {
        res.status(400).json({ message: 'Title is required' })

    }

    const task = await Task.create({
        text: title,
        user: req.user.id
    })
    res.status(200).json(task)
})



module.exports = { getTasks, setTask }
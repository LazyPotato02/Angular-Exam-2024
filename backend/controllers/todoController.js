const TodoData = require('../models/todoData')

const createTodo = async (req, res) => {
    const todo = new TodoData(req.body)

    try {
        const savedTodo = await todo.save()
        res.status(201).json(savedTodo)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const getSingleTodo = async (req, res) => {
    const todoId = req.params.id
    try {
        const todo = await TodoData.findById(todoId)
        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


// TODO : Make controllers for:

// get single todo
// get all user todos
// edit todo
// delete todo

module.exports = {
    createTodo,
    getSingleTodo
}
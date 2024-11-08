const TodoData = require('../models/todoData')
const sessionSchema = require('../models/sessions')
const todoData = require("../models/todoData");
const createTodo = async (req, res) => {
    const todo = new TodoData(req.body)


    try {

        const sessionId = req.cookies['session-id']
        if (!sessionId) {
            return res.status(401).send('Session not found');
        }

        const sessionData = await sessionSchema.findOne({
            'sessionId': `${sessionId}`
        });

        if (!sessionData) {
            return res.status(401).send('Invalid session');
        }
        const sessionInfo = JSON.parse(sessionData.session)
        const userId = sessionInfo.userId


        if (!userId) {
            return res.status(401).send('User not authenticated');
        }


        const newTodo = new todoData({
            name: req.body.name,
            description: req.body.description,
            done: req.body.done || false,
            owner: userId
        });
        await newTodo.save();
        res.status(201).json(newTodo);
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

const getSingleAllOwnerTodos = async (req, res) => {

}

// TODO : Make controllers for:

// get single todo
// get all user todos
// edit todo
// delete todo

module.exports = {
    createTodo,
    getSingleTodo,
    getSingleAllOwnerTodos
}
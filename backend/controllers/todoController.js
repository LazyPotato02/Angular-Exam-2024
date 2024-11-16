const TodoData = require('../models/todoData')
const createTodo = async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Todo name is required' });
        }
        const newTodo = new TodoData({
            name: req.body.name,
            description: req.body.description,
            done: req.body.done || false,
            owner: req.user._id
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSingleTodo = async (req, res) => {
    const todoId = req.params.id;
    try {
        const todo = await TodoData.findOne({ _id: todoId, owner: req.user._id });
        if (!todo) {
            return res.status(404).send('Todo not found or user not authorized');
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllOwnerTodos = async (req, res) => {
    try {
        const todos = await TodoData.find({ owner: req.user._id });
        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const todo = await TodoData.findOne({ _id: req.params.id, owner: req.user._id });
        if (!todo) {
            return res.status(404).send('Todo not found or user not authorized');
        }

        const updatedTodo = await TodoData.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const todo = await TodoData.findOne({ _id: req.params.id, owner: req.user._id });
        if (!todo) {
            return res.status(404).send('Todo not found or user not authorized');
        }

        await TodoData.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createTodo,
    getSingleTodo,
    getAllOwnerTodos,
    updateTodo,
    deleteTodo
}
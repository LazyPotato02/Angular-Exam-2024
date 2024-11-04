const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const todoData = mongoose.model('todo_Data',todoSchema)
module.exports = todoData

import mongoose from 'mongoose';


const todoSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

export const todoData = mongoose.model('todoData',todoSchema)
module.exports = todoData

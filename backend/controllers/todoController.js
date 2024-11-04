import {todoData as TodoData} from '../models/todoData'

const createTodo = async (req, res) => {
    const todo = new TodoData(req.body)

    try {
        const savedTodo = await todo.save()
        res.status(201).json(savedTodo)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}



module.exports ={
    createTodo
}
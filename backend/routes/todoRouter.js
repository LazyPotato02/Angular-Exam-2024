import express from 'express'
import {createTodo} from "../controllers/todoController";


const todoRouter = express.Router()

todoRouter.post('/',createTodo)



export default todoRouter
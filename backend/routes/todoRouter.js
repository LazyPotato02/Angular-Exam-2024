const express = require("express");
const todoController = require("../controllers/todoController.js");
const todoRouter = express.Router();

todoRouter.post('/',todoController.createTodo)
todoRouter.get('/:id',todoController.getSingleTodo)



module.exports = todoRouter
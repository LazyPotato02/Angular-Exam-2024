const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet')
const todoRouter = require("./routes/todoRouter");
const userRoutes = require("./routes/userRouter");
const authenticateSession = require('./middlewares/authSession');

const url = "mongodb://10.70.71.110:27017/todo-app";

const app = express();



app.use(helmet());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());



mongoose.connect(url, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

app.use('/todo',authenticateSession,todoRouter)
app.use('/users', userRoutes)

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
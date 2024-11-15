const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet')
const todoRouter = require("./routes/todoRouter");
const userRoutes = require("./routes/userRouter");
const authenticateSession = require('./middlewares/authSession');

// Change the url to the correct for you db
const url = "mongodb://10.70.71.110:27017/todo-app";

const app = express();



app.use(helmet());
const allowedOrigins = ['http://localhost:4200']

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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
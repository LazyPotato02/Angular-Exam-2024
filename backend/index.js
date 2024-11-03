const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const url = "mongodb://10.70.71.110:27017/todo-app";

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

// app.use('/example',exampleRouter)

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
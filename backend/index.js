import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import todoRouter from "./routes/todoRouter";


const app = express();

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

app.use('/todo',todoRouter)

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
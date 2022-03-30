import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';

const app = express();
dotenv.config();

app.use(cors());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to the API!");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}!`)))
.catch(error => console.log(error.message));
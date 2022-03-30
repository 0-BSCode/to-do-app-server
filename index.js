import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to the API!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running!"));
// mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then;
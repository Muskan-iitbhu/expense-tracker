const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');
const { readdirSync } = require('fs');

// This unlocks your .env file and gets the PORT number where your app will run.
dotenv.config();
const app = express();
const PORT = process.env.PORT;

mongoose.connect("mongodb://localhost:27017/expensetracker")
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ MongoDB Error:", err));

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
     app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
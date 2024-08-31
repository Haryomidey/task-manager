const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbUri = require('./configs/keys').dbURI;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))


const PORT  = 5173

const connectDb = async () => {
    await mongoose.connect(dbUri);
    console.log(`Data connected successfully`);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

connectDb();

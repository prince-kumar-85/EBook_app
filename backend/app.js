const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const bookRouter = require('./router/router'); // Book routes
const userRouter = require('./router/user'); // User routes
const connectDB = require('./conn/conn'); // DB connection

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static images
app.use('/upload/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
app.use('/api', bookRouter);
app.use('/user', userRouter);

// DB connection
connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

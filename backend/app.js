const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load env variables

const app = express();
const userRouter = require('./router/router'); // Import the router
const connectDB = require('./conn/conn'); // Import the DB connection

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files from /upload/images (for cover image access)
app.use('/upload/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
app.use('/api', userRouter);

// DB connection
connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

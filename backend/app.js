const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load env variables
const app = express();
const userRouter = require('./router/router'); // Import the router
const connectDB = require('./conn/conn'); // Import the connection

PORT = process.env.PORT || 3000; // Set the port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', userRouter); // Use the router for all routes starting with /api
connectDB(); // Connect to MongoDB

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Remove deprecated options
        await mongoose.connect(process.env.mongoURI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed", err);
        process.exit(1); // Forcefully exit app if DB connection fails
    }
};

module.exports = connectDB;

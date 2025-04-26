const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {   
            // options can be passed here (optional)
        })
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        console.error("MongoDB connection failed", err);
        process.exit(1); // Forcefully exit app if DB connection fails
    }
}

module.exports = connectDB;

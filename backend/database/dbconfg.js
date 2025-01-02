require('dotenv').config();  // Make sure to load environment variables from .env file

console.log(process.env.MONGO_URI);  // This should log your MongoDB URI to the console

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Correctly use process.env.MONGO_URI
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);  // Exit the process if the connection fails
    }
};

module.exports = connectDB;

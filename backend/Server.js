// necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

// Import the defined routes
const routes = require('./Routes/ToDoRoute.js');

// Load environment variables
require('dotenv').config();

// Create an Express application
const app = express();
// Define the port to listen on, using the environment variable or a default value
const PORT = process.env.PORT || 5000;

// Enable parsing of JSON data
app.use(express.json())

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors())

// Get the MongoDB URI from the environment variable or provide a default value
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://MaryamNawas2002:mnmaryam0327@cluster0.cfxkynd.mongodb.net/ToDoApp?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Error connecting to MongoDB: ', err))

// Use the defined routes
app.use(routes)

// Start the Express server
app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});

// Import the Mongoose library
const mongoose = require('mongoose')

// Define a Mongoose schema for the Todo app
const todoSchema = new mongoose.Schema({
    // Define a field for the text content of the Todo item
    text: {
        type: String,
        required: true  // Specify that the 'text' field is required
    }
})

// Create and export the Todo model using the defined schema
module.exports = mongoose.model('ToDo', todoSchema)

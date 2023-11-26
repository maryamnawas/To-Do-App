// Import the ToDoModel for interacting with the MongoDB database
const ToDoModel = require("../models/ToDoModel")

// Define a controller function to get all Todo items
const getToDo = async (req, res) => {
    try {
        // Retrieve all Todo items from the database
        const toDo = await ToDoModel.find();
        // Send the retrieved Todo items as the response
        res.send(toDo);
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error fetching Todo items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Define a controller function to save a new Todo item
const saveToDo = async (req, res) => {
    try {
        // Extract the 'text' field from the request body
        const { text } = req.body;
        // Create a new Todo item in the database
        const data = await ToDoModel.create({ text });
        // Log success message and send the created Todo item as the response
        console.log("Added successfully...");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error('Error saving Todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Define a controller function to update an existing Todo item
const updateToDo = async (req, res) => {
    try {
        // Extract the '_id' and 'text' fields from the request body
        const { _id, text } = req.body;
        // Update the Todo item in the database based on the '_id'
        await ToDoModel.findByIdAndUpdate(_id, { text });
        // Send a success response
        res.send("Updated successfully...");
    } catch (error) {
        console.error('Error updating Todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Define a controller function to delete a Todo item
const deleteToDo = async (req, res) => {
    try {
        // Extract the '_id' field from the request body
        const { _id } = req.body;
        // Delete the Todo item from the database based on the '_id'
        await ToDoModel.findByIdAndDelete(_id);
        // Send a success response
        res.send("Deleted successfully...");
    } catch (error) {
        console.error('Error deleting Todo item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Export the controller functions for use in the routes
module.exports = {
    getToDo,
    saveToDo,
    updateToDo,
    deleteToDo,
};

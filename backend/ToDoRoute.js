//necessary modules
const { Router } = require("express");
const ToDoController = require("../Controllers/ToDoController.js");

// Create an Express router
const router = Router();

// Define route for fetching all Todo items
router.get('/', ToDoController.getToDo);

// Define route for saving a new Todo item
router.post('/save', ToDoController.saveToDo);

// Define route for updating an existing Todo item
router.post('/update', ToDoController.updateToDo);

// Define route for deleting a Todo item
router.post('/delete', ToDoController.deleteToDo);

// Export the router for use in the main application
module.exports = router;

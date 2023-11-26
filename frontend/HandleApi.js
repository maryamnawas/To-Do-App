import axios from 'axios';

// Base URL for API requests
const baseUrl = "http://localhost:5000";

// Function to fetch all Todo items from the server and update the state
const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        // Update the state with the fetched Todo items
        setToDo(data);
    })
    .catch((error) => {
        console.error("Error fetching ToDo data:", error);
    });
}

// Function to add a new Todo item to the server and update the state
const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
        console.log(data);
        // Clear the input field
        setText("");
        // Fetch and update the state with the latest Todo items
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.error("Error adding ToDo:", error);
    });
};

// Function to update an existing Todo item on the server and update the state
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
        // Clear the input field and reset update mode
        setText("");
        setIsUpdating(false);
        // Fetch and update the state with the latest Todo items
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.error("Error updating ToDo:", error);
    });
};

// Function to delete a Todo item from the server and update the state
const deleteToDo = (_id, setToDo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        // Fetch and update the state with the latest Todo items
        getAllToDo(setToDo);
    })
    .catch((error) => {
        console.error("Error deleting ToDo:", error);
    });
};

// Export the functions for use in other parts of the application
export { getAllToDo, addToDo, updateToDo, deleteToDo };

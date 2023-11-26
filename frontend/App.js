import { useEffect, useState } from "react";
import ToDo from "./components/ToDo.js";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi.js";

function App() {
  // State variables for managing Todo items, input text, update mode, and Todo item ID
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  // useEffect to fetch all Todo items on component mount
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  // Function to activate update mode with the selected Todo item's details
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          {/* Input field for adding or updating Todo items */}
          <input
            type="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* Button for adding or updating Todo items based on update mode */}
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update " : "Add"}
          </div>
        </div>
        <div className="list">
          {/* Display Todo items using the ToDo component */}
          {Array.isArray(toDo) && toDo.length > 0 ? (
            toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))
          ) : (
            <p>No ToDo items available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;

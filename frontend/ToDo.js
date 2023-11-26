import React from 'react';

// Importing edit and delete icons from react-icons library
import { BiEdit } from 'react-icons/bi/index.esm.js';
import { AiFillDelete } from 'react-icons/ai/index.esm.js';

// Functional component for rendering a Todo item
const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='todo'>
        {/* Display the text content of the Todo item */}
        <div className='text'>{text}</div>
        
        {/* Icons for edit and delete actions */}
        <div className='icons'>
            {/* Edit icon with click event handler to activate update mode */}
            <BiEdit className='icon' onClick={updateMode}/>
            
            {/* Delete icon with click event handler to trigger deletion */}
            <AiFillDelete className='icon' onClick={deleteToDo}/>
        </div>
    </div>
  );
}

// Export the ToDo component for use in other parts of the application
export default ToDo;

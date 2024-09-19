import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

function UpdateTodo({ id, currentText, onUpdateComplete }) {
  const [newText, setNewText] = useState(currentText);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo({ id, newText }));
    onUpdateComplete(); // Call a function to reset the editing state after updating
  };

  return (
    <div className="flex space-x-2 mt-4">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="bg-gray-800 text-white rounded px-2"
      />
      <button
        onClick={handleUpdate}
        className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
      >
        Update
      </button>
    </div>
  );
}

export default UpdateTodo;

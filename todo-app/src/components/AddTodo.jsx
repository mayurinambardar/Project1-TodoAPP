import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
function AddTodo({onNewItem}) {
  const [todoName,setTodoName]=useState('')
  const [dueDate,setDueDate]=useState('')
  const handleNameChange=(event)=>{
 setTodoName(event.target.value);
  }
   const handleDateChange=(event)=>{
 setDueDate(event.target.value);
  }
  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate)
    setDueDate("");
    setTodoName("");
  }
  return (
    <>
     <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
      <input
        type="text"
        value={todoName}
        placeholder="Enter todo item"
        onChange={handleNameChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleAddButtonClicked}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        <IoAdd />
      </button>
    </div>
    </>
  );
}

export default AddTodo;

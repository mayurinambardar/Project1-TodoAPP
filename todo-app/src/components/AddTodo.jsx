import React, { useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
function AddTodo({onNewItem}) {
const todoNameElement=useRef();
const dueDateElement=useRef();
  const handleAddButtonClicked=(e)=>{
    e.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value=""
    dueDateElement.current.value=""
    onNewItem(todoName,dueDate)
  }
  return (
    <>
     <form onSubmit={handleAddButtonClicked} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
      <input
        type="text"
         ref={todoNameElement}  
        placeholder="Enter todo item"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    
     required />
      <input
        type="date"
        ref={dueDateElement}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
      />
      <button
        //  onClick={handleAddButtonClicked}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        <IoAdd />
      </button>
      </form>
    </>
  );
}

export default AddTodo;

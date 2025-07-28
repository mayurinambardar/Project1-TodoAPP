import React from "react";
import { MdDelete } from "react-icons/md";
function TodoItem({todoName,todoDate,onDeleteClick}) {

  return (
    <>
    <div className="max-w-xl mx-auto flex justify-between items-center bg-gray-100 border border-gray-200 rounded p-4 my-2 shadow-sm">
      <div className="text-lg font-medium">{todoName}</div>
      <div className="text-gray-600">{todoDate}</div>
      <button onClick={()=>onDeleteClick(todoName)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
       <MdDelete />
      </button>
    </div>
    </>
  );
}

export default TodoItem;

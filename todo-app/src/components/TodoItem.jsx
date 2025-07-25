import React from "react";
function TodoItem({todoName,todoDate,onDeleteClick}) {

  return (
    <>
    <div className="flex justify-between items-center bg-gray-100 border border-gray-200 rounded p-4 mx-4 my-2 shadow-sm">
      <div className="text-lg font-medium">{todoName}</div>
      <div className="text-gray-600">{todoDate}</div>
      <button onClick={()=>onDeleteClick(todoName)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
        Delete
      </button>
    </div>
    </>
  );
}

export default TodoItem;

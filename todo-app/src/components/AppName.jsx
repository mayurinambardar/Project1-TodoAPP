import React from "react";
import { FcTodoList } from "react-icons/fc";
function AppName() {
  return (
    <>
   <h1 className="text-3xl font-bold text-center py-4 bg-blue-100 text-blue-800 shadow-md flex items-center justify-center gap-2">
      Todo App <FcTodoList className="text-4xl" />
    </h1>
    
    </>
  );
}

export default AppName;

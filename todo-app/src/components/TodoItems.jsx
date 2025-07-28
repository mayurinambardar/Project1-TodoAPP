import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems=({onDeleteClick})=>{
  const{todoItems}=useContext(TodoItemsContext)
    
return (
    <>
    {todoItems.map((item)=> <TodoItem  key={item.name} todoName={item.name} todoDate={item.dueDate}/>)}
    </>
)
}
export default TodoItems;


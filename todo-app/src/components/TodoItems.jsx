import React from "react";
import TodoItem from "./TodoItem";
const TodoItems=({todoItems, onDeleteClick})=>{
return (
    <>
    {todoItems.map((item)=> <TodoItem onDeleteClick={onDeleteClick} key={item.name} todoName={item.name} todoDate={item.dueDate}/>)}
    </>
)
}
export default TodoItems;


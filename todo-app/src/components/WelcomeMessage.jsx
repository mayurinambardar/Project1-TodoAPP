import React,{useContext} from 'react'
import { TodoItemsContext } from '../store/todo-items-store'
function WelcomeMessage() {
  const{todoItems}=useContext(TodoItemsContext)
  return (
    todoItems.length === 0 && <p className="text-center text-xl text-gray-600 mt-8 font-semibold">
     Enjoy Your Day! No tasks for now.
    </p>
  )
}

export default WelcomeMessage
import React,{ useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';
function App() {
  
const [todoItems,setTodoItems]=useState([])
const addNewItem=(itemName, itemDueDate)=>{

setTodoItems((currValue)=>
   [...currValue,{name:itemName, dueDate:itemDueDate}]
 )
}
const deleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
  setTodoItems(newTodoItems)
}
  return (
   <>
   <TodoItemsContext.Provider value={{
    todoItems,
    addNewItem,
    deleteItem
    }}>
    <div className="min-h-screen bg-white">
      <AppName />
      <AddTodo/>
      <WelcomeMessage />
      <TodoItems />
    </div>
    </TodoItemsContext.Provider>
   </>
  )
}

export default App

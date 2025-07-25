import React,{ useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';
function App() {
  
const [todoItems,setTodoItems]=useState([])
const handleNewItem=(itemName, itemDueDate)=>{
const newTodoItems=[...todoItems,{name:itemName, dueDate:itemDueDate}]
setTodoItems(newTodoItems)
}
const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
  setTodoItems(newTodoItems)
}
  return (
   <>
    <div className="min-h-screen bg-white">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
    </div>
   </>
  )
}

export default App

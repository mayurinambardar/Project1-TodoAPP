import React,{ useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage';
function App() {
  const initialTodoItems=[{
    name:"Do Yoga",
    dueDate:"28/07/2025"
  },
{
    name:"Learn React",
    dueDate:"29/07/2025"
  },
  {
    name:"Learn Node.js",
    dueDate:"30/07/2025"
  },
  {
    name:"Learn MongoDb",
    dueDate:"30/07/2025"
  },
];
const [todoItems,setTodoItems]=useState(initialTodoItems)
const handleNewItem=(itemName, itemDueDate)=>{
console.log(`New Item added ${itemName} Date:${itemDueDate}`)
const newTodoItems=[...todoItems,{name:itemName, dueDate:itemDueDate}]
setTodoItems(newTodoItems)
}
  return (
   <>
    <div className="min-h-screen bg-white">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} />
    </div>
   </>
  )
}

export default App

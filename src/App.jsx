import { useEffect, useState } from "react";
import "./styles.css";
import NewtodoForm from "./NewtodoForm";
import Todolist from "./Todolist";

function App() {
  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return []
  return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTodo(title){
    setTodos(currentTodos=>{
      return[...currentTodos,{
        id:crypto.randomUUID(),title :title,completed : false
      }]
    })
  }
  //thecheckedtodolist
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }
  //thedeletedtodolist
  function DeleteTodo(id){
    setTodos(currentTodos=>{
     return(currentTodos.filter(todo=>todo.id!==id))
    })
  }

console.log(todos)
  return (
  <>
  <NewtodoForm addTodo={addTodo}/>
  <Todolist todos={todos} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo}/>
  
  </>
  )
}

export default App
import React from 'react';
import TodoItem from './TodoItem';

function Todolist({ todos ,toggleTodo ,DeleteTodo}) {
  return (
    <>
    <h1 className="header">To do List</h1>
  <ul className="list">
    {todos.map(todo=>{
      return(
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo} />
      )
    })}
  </ul>
    </>
  )
}

export default Todolist
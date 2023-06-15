import React from 'react'

function TodoItem({id,completed,title,toggleTodo,DeleteTodo}) {
  return (
    <li>
    <label>
      <input type="checkbox" 
       checked={completed} 
       onChange={e=>toggleTodo(id, e.target.checked)}/>
      {title}
    </label>
    <button onClick={()=>DeleteTodo(id)} className="btn btn-danger">Delete</button>
  </li>
  )
}

export default TodoItem
import React, { useState } from 'react'

const Form = () => {
  const[todoList, setTodoList] = useState([]);
  const[todo, setTodo] = useState("");

  const touch = (e) =>{
    setTodo(e.target.value)
  }

  const deleteTask = (taskName) =>{
    setTodoList(todoList.filter(task => task !== taskName))
  }

  const addList = () =>{
    setTodoList([...todoList, todo])
  }

  return (
    <div>
      <div className=''>
        
        <input type='input' onChange={touch} className='py-2 px-2 rounded-lg mt-8 bg-lime-500 text-white focus:outline-none' /> 
        <button className='px-3 py-2 bg-gray-300 ml-4 rounded-md' onClick={addList}>Add task</button>
        <br />
         {todoList.map(task =>{
          return <div>
            <h1>{task}</h1>
            
            <button className='px-3 bg-fuchsia-400 py-2 rounded-lg' onClick={() => deleteTask(task)}>D</button>
          </div>
         }) }
        
         
      </div>
    </div>
  )
}

export default Form

import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("")

    const handleChange = (event)=>{
        // console.log(event.target.value);
        setTask(event.target.value)
    }
    const addTask = ()=>{
           console.log(task) 
    }
  return (
    <>
        <div className="container">
            <div className="mb-3">
                <input type="text" className='form-control' onChange={handleChange} />
            </div>
            <div className="mb-3">
                <button className='btn btn-dark' onClick={addTask}> Add Task  </button>
            </div>

            <div className="mb-3">
                <p> {task} </p>
            </div>
        </div>
    </>
  )
}

export default Todo

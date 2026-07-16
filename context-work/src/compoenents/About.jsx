import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../main';

const About = () => {
    const todos = useContext(userContext)
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        const allTodos = todos.getAllTask();
        allTodos.then((val) => {
            setTodo(val)
        })
    }, [])
    return (
        <>
            <div className="container">
                <h1> About </h1>
                <ul className='list-group'>
                    {
                        todo.map((val, index) => {
                            return <li className="list-group-item"> {val.taskName}  </li>

                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default About

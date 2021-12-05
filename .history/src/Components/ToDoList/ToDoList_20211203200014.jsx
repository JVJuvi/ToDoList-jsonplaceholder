import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const ToDoList = () => {

    const [state, setState] = useState([]);  

    useEffect(async() => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
            console.log('result', result.data)
            setState(result.data)
        } catch(error) {
            console.log('error', error.response?.data)
        }
    }, [])

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">To do list</h3>
            <Link to="/user" className="btn btn-primary">Add User</Link>
            {/* <ul className="list-group">
                {
                    state.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span>
                                <input type="checkbox" checked={item.completed} />
                            </span>
                        </li>
                    ))
                }
            </ul> */}
            <div className="todolist">
                <h1>To Do List</h1>
                <div className="taskName">
                    <p>Task name</p>
                    <form>
                        <input type="text" />
                        <button><i class='bx bx-plus-medical'></i> Add task</button>
                        <button><i class='bx bx-upload'></i> Update task</button>
                    </form>
                </div>
                <hr />
                <div className="taskToDo mt-3">
                    <h3>Task to do</h3>
                    {
                    state.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span>
                                <i class='bx bx-edit' ></i>
                                <i class='bx bx-trash' ></i>
                                <i class='bx bx-check-square' ></i>
                            </span>
                        </li>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ToDoList

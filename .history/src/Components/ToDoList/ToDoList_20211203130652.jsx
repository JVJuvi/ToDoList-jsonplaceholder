import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const ToDoList = () => {

    const [state, setState] = useState([]);  

    useEffect(async() => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log('result', result.data)
            setState(result.data)
        } catch(error) {
            console.log('error', error.response?.data)
        }
    }, [])

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">To do list</h3>
            <Link to="/user" className="btn btn-primary">Add API</Link>
            <ul className="list-group">
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
            </ul>
        </div>
    )
}

export default ToDoList

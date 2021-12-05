import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
            <ul className="list-group">
                {
                    state.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span className="btn btn-primary">14</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList

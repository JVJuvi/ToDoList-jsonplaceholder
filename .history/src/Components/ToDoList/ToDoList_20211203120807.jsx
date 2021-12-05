import axios from 'axios'
import React, { useEffect } from 'react'

const ToDoList = () => {

    useEffect(async() => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log('result', result.data)
        } catch(error) {
            console.log('error', error.response?.data)
        }
    }, [])

    return (
        <div>
            <ul className="list-group">
                {
                    result.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span class="badge badge-primary badge-pill">14</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoList

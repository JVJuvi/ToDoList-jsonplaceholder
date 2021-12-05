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
            todos
        </div>
    )
}

export default ToDoList

import axios from 'axios'
import React, { useEffect } from 'react'

export const User = () => {

    useEffect(()=>{
        add();
    },[])

    const add = async () => {
        try {
            let result = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('users', result.data)
        } catch(error) {
            console.log('error', error)
        }
    }

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
        </div>
    )
}

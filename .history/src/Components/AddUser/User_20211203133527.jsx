import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        add();
    },[])

    const add = async () => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('users', result.data)
            setUsers(result.data);
        } catch(error) {
            console.log('error', error)
        }
    }

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
            <div className="user__list">
                {
                    users.map((item) => (
                        <div key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.email}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

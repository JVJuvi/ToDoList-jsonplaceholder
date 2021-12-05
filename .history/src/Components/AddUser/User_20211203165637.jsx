import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetUserAction } from '../../redux/actions/UserAction/UserAction';
import AddUser from './AddUser';

export const User = () => {

    const [users, setUsers] = useState([]);

    const {arrUsers} = useSelector(state => state.UserReducer);
    console.log('arrUsers', arrUsers)

    const dispatch = useDispatch();

    useEffect(()=>{
        // dispatch(GetUserAction());
        getUser()
    },[])
    
    const getUser = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => {
            console.log('error', error)
        })
    }

    const addUser = async (name, email) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }, 
        })
        .then((res) => {
            if(res.status !== 201) {
                return
            } else {
                return res.json();
            }
        })
        .then((data) => {
            setUsers((users) => [...users, data])
        })
        .catch((error) => {
            console.log('error', error)
        })
    }

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
            <br />
                <AddUser addUsers={addUsers} />
            <hr />
            <div>
                {
                    users.map((item) => (
                        <div className="user__list" key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.email}</span>
                            <span>
                                <button>edit</button>
                                <button>delete</button>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

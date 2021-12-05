import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserAction, GetUserAction } from '../../redux/actions/UserAction/UserAction';
import { ADD_USER, DELETE_USER, GET_USER } from '../../redux/types/UserType/UserType';
import AddUser from './AddUser';

export const User = () => {

    const [users, setUsers] = useState([]);
    console.log('users', users)

    const {arrUsers} = useSelector(state => state.UserReducer);
    console.log('arrUsers', arrUsers)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetUserAction());
        // getUser()
    },[])
    
    // const getUser = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data) => dispatch({
    //         type: GET_USER,
    //         payload: data
    //     }))s
    //     .catch((error) => {
    //         console.log('error', error)
    //     })
    // }

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
            dispatch({
                type: ADD_USER,
                payload: data
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
    }

    const handleDelete = (id) => {
        dispatch(DeleteUserAction(id))
    }

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
            <br />
                <AddUser />
            <hr />
            <div>
                {
                    arrUsers.map((item) => (
                        <div className="user__list" key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.email}</span>
                            <span>
                                <button onClick={()=>{
                                    handleDelete(item.id)
                                }}>delete</button>
                                <button>edit</button>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

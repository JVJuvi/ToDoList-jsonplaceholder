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
        dispatch(GetUserAction());
    },[])

    const addUsers = async (name, email) => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users',{
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log('addusers', result.data)
            setUsers([...users, result.data]);
        } catch(error) {
            console.log('error', error)
        }
    }

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
            <br />
                <AddUser addUsers={addUsers} />
            <hr />
            <div>
                {
                    arrUsers.map((item) => (
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

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserAction, GetUserAction } from '../../redux/actions/UserAction/UserAction';
import { ADD_USER, DELETE_USER, GET_USER } from '../../redux/types/UserType/UserType';
import AddUser from './AddUser';
import ListUsers from './ListUsers';

export const User = () => {

    const [users, setUsers] = useState([]);
    console.log('users', users)

    const {arrUsers} = useSelector(state => state.UserReducer);
    console.log('arrUsers', arrUsers)

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(GetUserAction());
    // },[])

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
                <ListUsers id={arrUsers.id} key={arrUsers.id} name={arrUsers.name} email={arrUsers.email} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

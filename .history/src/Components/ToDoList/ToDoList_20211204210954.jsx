import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTaskAction, GetToDoListAction } from '../../redux/actions/TodoListAction/TodoListAction';
import { GetUserAction } from '../../redux/actions/UserAction/UserAction';
import AddTask from './AddTask';
import _ from 'lodash';
import { COMPLETED, EDIT } from '../../redux/types/ToDoListType/ToDoListType';

const ToDoList = () => {

    const {arrToDoList} = useSelector(state => state.TodoListReducer);
    console.log('arrToDoList', arrToDoList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetToDoListAction());
        dispatch(GetUserAction());
    }, []);

    const handleDelete = (id) => {
        dispatch(DeleteTaskAction(id));
    }

    let arrTaskList = _.filter(arrToDoList, {'completed': false});
    let arrCompeted = _.filter(arrToDoList, {'completed': true});

    return (
        <div className="container p-2">
            <div className="todolist">
                <h1>To Do List</h1>
                <div className="taskName">
                    <p>Task name</p>
                    <AddTask />
                </div>
                <hr />
                <div className="taskToDo mt-3">
                    <h3>Task to do</h3>
                    {
                        arrTaskList.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <p>{item.title}</p>
                                <span>
                                    <button onClick={() => {
                                        dispatch({
                                            type: EDIT,
                                            payload: item
                                        })
                                    }}><i class='bx bx-edit' ></i></button>
                                    <button onClick={() => {
                                        handleDelete(item.id)
                                    }}><i class='bx bx-trash' ></i></button>
                                    <button onClick={() => {
                                        dispatch({
                                            type: COMPLETED,
                                            payload: item.id,
                                        })
                                    }}><i class='bx bx-check-square' ></i></button>
                                </span>
                            </li>
                        ))
                    }
                </div>
                <div className="taskCompleted mt-3">
                    <h3>Task completed</h3>
                    {
                        arrCompeted.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <p>{item.title}</p>
                                <span>
                                    <button onClick={()=>{
                                        handleDelete(item.id)
                                    }}><i class='bx bx-trash' ></i></button>
                                </span>
                            </li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoList

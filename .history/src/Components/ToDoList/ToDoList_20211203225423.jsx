import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetToDoListAction } from '../../redux/actions/TodoListAction/TodoListAction';

const ToDoList = () => {

    const {arrToDoList} = useSelector(state => state.TodoListReducer);
    console.log('arrToDoList', arrToDoList)
    const [state, setState] = useState([]);  

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetToDoListAction());
    }, [])

    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">To do list</h3>
            <Link to="/user" className="btn btn-primary">Add User</Link>
            <div className="todolist">
                <h1>To Do List</h1>
                <div className="taskName">
                    <p>Task name</p>
                    <form>
                        <input type="text" />
                        <button><i class='bx bx-plus-medical'></i> Add task</button>
                        <button><i class='bx bx-upload'></i> Update task</button>
                    </form>
                </div>
                <hr />
                <div className="taskToDo mt-3">
                    <h3>Task to do</h3>
                    {
                    state.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span>
                                <button><i class='bx bx-edit' ></i></button>
                                <button><i class='bx bx-trash' ></i></button>
                                <button><i class='bx bx-check-square' ></i></button>
                            </span>
                        </li>
                    ))
                }
                </div>
                <div className="taskCompleted mt-3">
                    <h3>Task completed</h3>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>nhiem vu 1</p>
                        <span>
                            <button><i class='bx bx-trash' ></i></button>
                        </span>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default ToDoList

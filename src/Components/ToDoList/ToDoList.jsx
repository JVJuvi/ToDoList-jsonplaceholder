import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTaskAction, GetToDoListAction } from '../../redux/actions/TodoListAction/TodoListAction';
import { GetUserAction } from '../../redux/actions/UserAction/UserAction';
import AddTask from './AddTask';
import _ from 'lodash';
import TaskTodo from './TaskTodo';
import TaskCompleted from './TaskCompleted';

const ToDoList = () => {

    // useSelector
    const {arrToDoList} = useSelector(state => state.TodoListReducer);

    //useDispatch
    const dispatch = useDispatch();

    //useEffect
    useEffect(() => {
        dispatch(GetToDoListAction());
        dispatch(GetUserAction());
    }, []);

    const handleDelete = (id) => {
        dispatch(DeleteTaskAction(id));
    }

    let arrTaskList = _.filter(arrToDoList, {'completed': false});
    let arrCompeted = _.filter(arrToDoList, {'completed': true});
    console.log(arrCompeted)

    return (
        <div className="container p-5">
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
                            <TaskTodo key={index} item={item} title={item.title} id={item.id} handleDelete={handleDelete} />
                        ))
                    }
                </div>
                <div className="taskCompleted mt-3">
                    <h3>Task completed</h3>
                    {
                        arrCompeted.map((item, index) => (
                            <TaskCompleted key={index} title={item.title} id={item.id} handleDelete={handleDelete} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoList

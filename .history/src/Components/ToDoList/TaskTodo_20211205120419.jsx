import React from 'react'
import { useDispatch } from 'react-redux';
import { COMPLETED, EDIT } from '../../redux/types/ToDoListType/ToDoListType';

const TaskTodo = ({item, title, id, handleDelete}) => {

    const dispatch = useDispatch();

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>{title}</p>
            <span>
                <button onClick={() => {
                    dispatch({
                        type: EDIT,
                        payload: item
                    })
                }}><i class='bx bx-edit' ></i></button>
                <button onClick={() => {
                    handleDelete(id)
                }}><i class='bx bx-trash' ></i></button>
                <button onClick={() => {
                    dispatch({
                        type: COMPLETED,
                        payload: id,
                    })
                }}><i class='bx bx-check-square' ></i></button>
            </span>
        </li>
    )
}

export default TaskTodo

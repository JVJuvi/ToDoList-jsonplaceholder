import React from 'react'
import { useDispatch } from 'react-redux';

const TaskTodo = ({title, id, handleDelete}) => {

    const dispatch = useDispatch();

    return (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
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

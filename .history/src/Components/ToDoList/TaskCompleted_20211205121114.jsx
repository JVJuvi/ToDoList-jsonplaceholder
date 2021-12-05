import React from 'react'

const TaskCompleted = ({title, id, handleDelete}) => {
    return (
        <li lassName="list-group-item d-flex justify-content-between align-items-center">
            <p>{title}</p>
            <span>
                <button onClick={()=>{
                    handleDelete(id)
                }}><i class='bx bx-trash' ></i></button>
            </span>
        </li>
    )
}

export default TaskCompleted

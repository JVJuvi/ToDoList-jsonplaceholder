import React from 'react'

const ListUsers = ({id, name, email, handleDelete}) => {
    return (
        <div className="user__list">
            <span>{name}</span>
            <span>{email}</span>
            <span>
            <button onClick={()=>{
                handleDelete(id)
            }}>delete</button>
            </span>
        </div>
    )
}

export default ListUsers

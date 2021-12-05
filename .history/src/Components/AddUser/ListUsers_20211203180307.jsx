import React from 'react'

const ListUsers = () => {
    return (
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
    )
}

export default ListUsers

import React from 'react'

const AddUser = () => {
    return (
        <div className="container">
            <h3 className="mb-5 mt-3 text-center">Add user</h3>
            {/* <ul className="list-group">
                {
                    state.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{item.title}</p>
                            <span>
                                <input type="checkbox" checked={item.completed} />
                            </span>
                        </li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default AddUser

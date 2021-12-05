import React from 'react'

const AddUser = ({addUsers}) => {

    const handleOnsubmit = (e) => {
        e.preventDefault();
        addUsers(e.target.name.value, e.target.email.value)
        console.log(e.target.name.value)
        e.target.name.value = '';
        e.target.email.value = '';
    }

    return (
        <div className="text-center mb-5">
            <form onSubmit={handleOnsubmit}>
                <h3>Add</h3>
                <input type="text" placeholder="name" name="name" />
                <input type="email" placeholder="email" name="email" />
                <button type="submit" onSubmit={handleOnsubmit}>add</button>
            </form>
        </div>
    )
}

export default AddUser

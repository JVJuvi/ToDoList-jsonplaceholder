import React from 'react'

const AddUser = ({addUsers}) => {



    return (
        <div className="text-center mb-5">
            <form>
                <h3>Add</h3>
                <input type="text" placeholder="name" name="name" />
                <input type="email" placeholder="email" name="email" />
                <button>add</button>
            </form>
        </div>
    )
}

export default AddUser

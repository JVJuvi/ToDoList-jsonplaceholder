import { ADD_TASK, GET_TASK, DELETE_TASK, UPDATE } from '../../types/ToDoListType/ToDoListType';


export const GetToDoListAction = () => {
    return async(dispatch) => {
        await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then((res) => res.json())
        .then((data) => dispatch({
            type: GET_TASK,
            payload: data
        }))
        .catch ((error) => {
            console.log('error', error)
        })
    }
}

export const AddTaskAction = (title) => {
    return async(dispatch) => {
        await fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false,             
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => {
            if(res.status !== 201) {
                return
            } else {
                return res.json();
            }
        })
        .then((data) => {
            dispatch({
                type: ADD_TASK,
                payload: data
            })
            alert('them thanh cong')
        })
        .catch((error) => {
            console.log('error', error);
        })
    }
}

export const DeleteTaskAction = (id) => {
    return async(dispatch) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
        .then((res) => {
            if(res.status !== 200) {
                return
            } else {
                dispatch({
                    type: DELETE_TASK,
                    payload: id
                })
                alert('xoa thanh cong')
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
    }
}

export const UpdateTaskAction = (id, title) => {
    return async(dispatch) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                userId: 1,
                id: id,
                title: title,
                completed: false,             
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: UPDATE,
                payload: data
            })
            alert('cap nhat thanh cong')
        })
        .catch((error) => {
            console.log('error', error)
        })
    }
}



import { ADD_TASK, GET_TASK, DELETE_TASK } from '../../types/ToDoListType/ToDoListType';


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
        })
        .catch((error) => {
            console.log('error', error);
        })
    }
}

export const DeleteTaskAction = (id) => {
    return async(dispatch) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/1/todos/${id}`, {
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
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
    }
}
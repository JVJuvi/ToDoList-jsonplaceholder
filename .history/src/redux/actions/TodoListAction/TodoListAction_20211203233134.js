import { ADD_TASK, GET_TASK } from '../../types/ToDoListType/ToDoListType';


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
                userId: 1
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
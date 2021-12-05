import { GET_TASK } from '../../types/ToDoListType/ToDoListType';


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
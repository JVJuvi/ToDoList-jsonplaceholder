import axios from 'axios';
import { ADD_USER, DELETE_USER, GET_USER } from '../../types/UserType/UserType';


export const GetUserAction = () => {
    return async(dispatch) => {
        await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((data) => dispatch({
            type: GET_USER,
            payload: data
        }))
        .then((data) => {
            const user = JSON.stringify(data);
            localStorage.setItem('USER', user)
        })
        .catch((error) => {
            console.log('error', error)
        })
    }
}

// export const AddUserAction = (name, email) => {
//     return async(dispatch) => {
//         await fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             body: JSON.stringify({
//                 name: name,
//                 email: email,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }, 
//         })
//         .then((res) => {
//             if(res.status !== 201) {
//                 return
//             } else {
//                 return res.json();
//             }
//         })
//         .then((data) => {
//             dispatch({
//                 type: ADD_USER,
//                 payload: data
//             })
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//     }
// }

// export const DeleteUserAction = (id) => {
//     return async(dispatch) => {
//         await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//             method: 'DELETE'
//         })
//         .then((res) => {
//             if(res.status !== 200) {
//                 return 
//             } else {
//                 dispatch({
//                     type: DELETE_USER,
//                     payload: id
//                 })
//             }
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//     }
// }

import axios from 'axios';
import { ADD_USER, GET_USER } from '../../types/UserType/UserType';


export const GetUserAction = () => {
    return async(dispatch) => {
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('users', result.data)
            dispatch({
                type: GET_USER,
                payload: result.data
            })
        } catch(error) {
            console.log('error', error.response?.data);
        }
    }
}

export const AddUserAction = (name, email) => {
    return async(dispatch) => {
        // try {
        //     const result = await axios.post('https://jsonplaceholder.typicode.com/users',{
        //         method: 'POST',
        //         body: JSON.stringify({
        //             name: name,
        //             email: email,
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     console.log('addusers', result.data);
        //     dispatch({
        //         type: ADD_USER,
        //         payload: result.data
        //     })
        // } catch(error) {
        //     console.log('error', error.response?.data);
        // }
        // await fetch('https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name: name,
        //         email: email,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     }, 
        // })
        // .then((res) => {
        //     if(res.status !== 201) {
        //         return
        //     } else {
        //         return res.json();
        //     }
        // })
        // .then((data) => {

        // })
    }
}

// export const AddUser
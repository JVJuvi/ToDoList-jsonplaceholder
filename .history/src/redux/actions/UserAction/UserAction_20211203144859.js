
import axios from 'axios';
import { GET_USER } from '../../types/UserType/UserType';


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
            console.log('error', error.response?.data)
        }
    }
}

// export const AddUser
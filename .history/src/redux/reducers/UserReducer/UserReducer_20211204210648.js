import { ADD_USER, DELETE_USER, GET_USER } from "../../types/UserType/UserType"



const stateDefault = {
    arrUsers: []
}

export const UserReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case GET_USER: {
            state.arrUsers = action.payload;
            return {...state};
        }
        case ADD_USER: {
            state.arrUsers = [...state.arrUsers, action.payload];
            return {...state};
        }
        case DELETE_USER: {
            let arrUserUpdate = [...state.arrUsers];
            let arrUserAfterF =  arrUserUpdate.filter(user =>{
                return user.id !== action.payload
            })
            state.arrUsers = arrUserAfterF;
            return {...state};
        }

        default: return {...state};
    }
}
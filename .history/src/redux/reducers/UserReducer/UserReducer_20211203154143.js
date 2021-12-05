import { ADD_USER, GET_USER } from "../../types/UserType/UserType"



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
            state.arrUsers = action.payload;
            return {...state};
        }

        default: return {...state};
    }
}
import { GET_TASK } from "../../types/ToDoListType/ToDoListType";



const stateDefault = {
    arrToDoList = []
}

export const TodoListReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case GET_TASK: {
            state.arrToDoList = action.payload;
            return {...state};
        }
        default: return {...state};
    }
}



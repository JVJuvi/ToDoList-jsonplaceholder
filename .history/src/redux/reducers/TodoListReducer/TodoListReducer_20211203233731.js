import _ from "lodash";
import { ADD_TASK, GET_TASK } from "../../types/ToDoListType/ToDoListType";



const stateDefault = {
    arrToDoList: [],
    arrToDo: [],
    arrComplete: [],
}

export const TodoListReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case GET_TASK: {
            state.arrToDoList = action.payload;
            // state.arrComplete = _.filter(state.arrToDoList, {'completed': true})
            return {...state};
        }
        case ADD_TASK: {
            state.arrToDoList = [...state.arrToDoList, action.payload];
            return {...state};
        }
        default: return {...state};
    }
}




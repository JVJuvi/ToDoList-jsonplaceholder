import _ from "lodash";
import { ADD_TASK, COMPLETED, DELETE_TASK, EDIT, GET_TASK, UPDATE } from "../../types/ToDoListType/ToDoListType";



const stateDefault = {
    arrToDoList: [],
    arrToDo: [],
    arrComplete: [],
    arrEdit: {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
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

        case DELETE_TASK: {
            let arrToDoListUpdate = [...state.arrToDoList];
            let arrToDoListAF = arrToDoListUpdate.filter(task => {
                return task.id !== action.payload;
            });
            state.arrToDoList = arrToDoListAF;
            return {...state};
        }

        case COMPLETED: {
            let arrToDoListUpdate = [...state.arrToDoList];
            let index = arrToDoListUpdate.findIndex(item => item.id === action.payload);
            if(index !== -1) {
                arrToDoListUpdate[index].completed = true;
            }
            state.arrToDoList = arrToDoListUpdate;
            return {...state};
        }

        case EDIT: {
            state.arrEdit = action.payload;
            return {...state};
        }

        case UPDATE: {
            let arrToDoListUpdate = [...state.arrToDoList];
            let index = arrToDoListUpdate.findIndex(item => item.id === action.payload.id);
            if(index !== -1) {
                arrToDoListUpdate[index].title = action.payload.title;
            }
            state.arrToDoList = arrToDoListUpdate;
            return {...state};
        }

        default: return {...state};
    }
}




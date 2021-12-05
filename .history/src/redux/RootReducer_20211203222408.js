import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { UserReducer } from './reducers/UserReducer/UserReducer';
import { TodoListReducer } from './reducers/TodoListReducer/TodoListReducer';



const RootReducer = combineReducers({
    UserReducer,
    TodoListReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))
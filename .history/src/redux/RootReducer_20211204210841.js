import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { TodoListReducer } from './reducers/TodoListReducer/TodoListReducer';



const RootReducer = combineReducers({
    TodoListReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))
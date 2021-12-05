import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { UserReducer } from './reducers/UserReducer/UserReducer';



const RootReducer = combineReducers({
    UserReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))
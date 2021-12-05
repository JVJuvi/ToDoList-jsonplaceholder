import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'



const RootReducer = combineReducers({

})

export const store = createStore(RootReducer, applyMiddleware(thunk))
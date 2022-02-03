import { combineReducers, createStore } from "redux";
import { EmployeesReducer } from "./EmployeesState";
import { authReducer } from "./AuthState";



// Creating reducers object from all our reducers: 
const reducers = combineReducers({ EmployeesState: EmployeesReducer, authState: authReducer});

// The most important Redux object: 
const store = createStore(reducers);

export default store;

import { combineReducers, createStore } from "redux";
import { EmployeesReducer } from "./EmployeesState";


// Creating reducers object from all our reducers: 
const reducers = combineReducers({ EmployeesState: EmployeesReducer });

// The most important Redux object: 
const store = createStore(reducers);

export default store;

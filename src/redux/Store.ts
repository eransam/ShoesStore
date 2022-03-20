import { combineReducers, createStore } from "redux";
import { EmployeesReducer } from "./EmployeesState";
import { authReducer } from "./AuthState";
import { productsReducer } from "./ProductsState";



// Creating reducers object from all our reducers: 
const reducers = combineReducers({ productsState: productsReducer, EmployeesState: EmployeesReducer, authState: authReducer});

// The most important Redux object: 
const store = createStore(reducers);

export default store;

import EmployeesModel from "../Models/EmployeesModel";

// Employees State - Employees data needed in the application level:
export class EmployeesState {
    public Employees: EmployeesModel[] = [];
}

// Employees Action Type - any action which can be done on the above Employees state:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployees = "AddEmployees",
    UpdateEmployees = "UpdateEmployees",
    DeleteEmployees = "DeleteEmployees"
}

// Employees Action - any single object sent to the store during "dispatch":
export interface EmployeesAction {
    type: EmployeesActionType;
    payload: any;
}

// Employees Action Creators - function for creating EmployeesAction objects. each function creates one Action object:
export function fetchEmployeesAction(Employees: EmployeesAction[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees, payload: Employees };
}
export function addEmployeesAction(Employees: EmployeesAction): EmployeesAction {
    return { type: EmployeesActionType.AddEmployees, payload: Employees };
}
export function updateEmployeesAction(Employees: EmployeesAction): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployees, payload: Employees };
}
export function deleteEmployeesAction(id: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployees, payload: id };
}
// Employees Reducer - the main function performing any action on Employees state:
// the new EmployeesState() is a default value for the first time only
export function EmployeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {
    
    // Must duplicate the current state and not touch the given current state: 
    const newState = { ...currentState };

    switch (action.type) {

        case EmployeesActionType.FetchEmployees:
            newState.Employees = action.payload; // Here the payload is the Employees list.
            break;

        case EmployeesActionType.AddEmployees:
            newState.Employees.push(action.payload); // Here the payload is a single object to add.
            break;

        case EmployeesActionType.UpdateEmployees:
            const indexToUpdate = newState.Employees.findIndex(p => p.id === action.payload.id); // Here the payload is a single object to update.
            if (indexToUpdate >= 0) {
                newState.Employees[indexToUpdate] = action.payload;
            }
            break;
            
        case EmployeesActionType.DeleteEmployees:
            const indexToDelete = newState.Employees.findIndex(p => p.id === action.payload); // Here the payload is the id to delete.
            if (indexToDelete >= 0) {
                newState.Employees.splice(indexToDelete, 1);
            }
            break;
    }

    return newState;
}
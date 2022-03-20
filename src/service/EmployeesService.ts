import axios from "axios";
import EmployeedModel from "../Models/EmployeesModel";
import { fetchEmployeesAction, addEmployeesAction, updateEmployeesAction, deleteEmployeesAction } from "../redux/EmployeesState";
import store from "../redux/Store";
import config from "../utils/Config";

class EmployeesesService {

    public async fetchEmployees(): Promise<EmployeedModel[]> {
        if(store.getState().EmployeesState.Employees.length === 0) {
            const response = await axios.get<EmployeedModel[]>(config.employeesUrl + "delayed");
            const AllEmployeed = response.data;
            store.dispatch(fetchEmployeesAction(AllEmployeed));
        }
        return store.getState().EmployeesState.Employees;
    }

    public async getOneEmployees(id: number): Promise<EmployeedModel> {
        let Employees = store.getState().EmployeesState.Employees.find(p => p.employeesID === id);
        if(!Employees) {
            const response = await axios.get<EmployeedModel>(config.employeesUrl + id);
            Employees = response.data;
        }
        return Employees;
    }

    public async deleteOneEmployees(id: number): Promise<void> {
        await axios.delete(config.employeesUrl + id);
        store.dispatch(deleteEmployeesAction(id));
    }

    public async addNewEmployees(Employees: EmployeedModel): Promise<EmployeedModel> {

        // Convert out Employees to FormData:
        const formData = new FormData();
        formData.append("employeesID", Employees.employeesID.toString());
        formData.append("firstName", Employees.firstName);
        formData.append("lastName", Employees.lastName);
        formData.append("city", Employees.city);
        formData.append("birthDate", Employees.birthDate);


        // Post the new Employees to the server: 
        const response = await axios.post<EmployeedModel>(config.employeesUrl, formData);
        const addedEmployees = response.data;

        // Add to redux global state: 
        store.dispatch(addEmployeesAction(addedEmployees));

        return addedEmployees;
    }

    public async updateEmployees(Employees: EmployeedModel): Promise<EmployeedModel> {

        // Convert out Employeed to FormData:
        const formData = new FormData();
        formData.append("employeesID", Employees.employeesID.toString());
        formData.append("firstName", Employees.firstName);
        formData.append("lastName", Employees.lastName);
        formData.append("city", Employees.city);
        formData.append("birthDate", Employees.birthDate);

        // Put the new Employeed to the server: 
        const response = await axios.put<EmployeedModel>(config.employeesUrl + Employees.employeesID, formData);
        const updatedEmployees = response.data;

        // Add to redux global state: 
        store.dispatch(updateEmployeesAction(updatedEmployees));

        return updatedEmployees;
    }
    
}

const EmployeesService = new EmployeesesService();

export default EmployeesService;
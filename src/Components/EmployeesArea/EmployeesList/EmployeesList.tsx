import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EmployeesModel from "../../../Models/EmployeesModel";
import config from "../../../utils/Config";
//import Loading from "../../SharedArea/Loading/Loading";
import EmployeesCard from "../EmployeesCard/EmployeesCard";
import "./EmployeesList.css";

function EmployeesList(): JSX.Element {

    // Create products state: 
    const [Employees, setEmployees] = useState<EmployeesModel[]>([]);

    useEffect(() => {

        // IIFE for using async-await:
        //אי אפשר ליצור פונ' אסינק ישירות בתוך היוז אפקט ולשם כך יצרנו את 
        //IIFE פונ' האסינק בתוך פוקציית 
        (async function () {

            // AJAX Request:
            const response = await axios.get<EmployeesModel[]>(config.employeesUrl);

            // Extract the data from the response:
            setEmployees(response.data);

        })();

    }, []);

    return (
        <div className="EmployeesList">

            {/*{Employees.length === 0 && <Loading />}*/}

            <NavLink to="/Employees/new">add Employees ➕</NavLink>
            
            {/* פה אנו עושים על המערך שקיבלנו פונקציית מאפ 
            ProductCard ושם מחילים על כל אובייקט שהתקבל את קומפוננטת 
            אשר מדפיסה את האובייקט על המשך וגם נותנת לכל אובייקט 
            פרטי key */}

            {/*הוא האובייקט ProductCard הפרמטר של קומפוננטת  */}
            {Employees.map(p => <EmployeesCard key={p.employeesID} Employeesone={p} />)}

        </div>
    );
}

export default EmployeesList;

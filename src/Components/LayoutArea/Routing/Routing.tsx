import "./Routing.css";
import { Route, Routes } from "react-router";
import Home from "../../HomeArea/Home/Home"; 
import PageNotFound from "../../LayoutArea/PageNotFound/PageNotFound"; 
import ProductList from "../../ProductsArea/ProductList/ProductList"; 
import About from "../../HomeArea/About/About"; 
import StorySeccses from "../../HomeArea/StorySeccses/StorySeccses"; 
import { Navigate } from "react-router-dom";
import ProductsShose from "../../HomeArea/productsShose/productsShose";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import EmployeesDetais from "../../EmployeesArea/EmployeesDetails/EmployeesDetails";
import AddEmployees from "../../EmployeesArea/AddEmployees/AddEmployees";
import OrderShoes from "../../ProductsArea/OrderShoes/OrderShoes";




function Routing(): JSX.Element {
    return (
    <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/ProductList" element={<ProductList />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/storyseccses" element={<StorySeccses />} /> 
        <Route path="/productsshose" element={<ProductsShose />} /> 
        <Route path="/employees/details/:id" element={<EmployeesDetais/>} />
        <Route path="/Orders" element={<OrderShoes/>} />



        
          {/* יש לנו 2 דרכים לקבוע מה יהיה מוצג בכתובת הריקה(/) דרך אחת ביא לרשום עוד נתיב כרגיל כך:
                    Default route - first way: */}
            {/* <Route path="/" element={<Home />} /> */}

            {/*והדרך השנייה היא לרשום כך את הקוד שהוא שברגע שיכניסו כתובת ריקה תנווט לדף המבוקש
             Default route - second way: */}
            <Route path="/" element={<Navigate to="/home" />} />

                     {/*כוכבית מתייחסת לכל שאר הכתובות שלא כתובות פה וכך במידה 
                     ומשתמש יקליד כתובת לא קיימת הוא יגיע להודעה שהדף לא קיים */}
        <Route path="*" element={<PageNotFound />} /> 
        
        <Route path="/EmployeesList" element={<EmployeesList />} />


                    {/* Handle Form: */}
                    <Route path="/Employees/new" element={<AddEmployees />} />



    </Routes>
    );
}

export default Routing;

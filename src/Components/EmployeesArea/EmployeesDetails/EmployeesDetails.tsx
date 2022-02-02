import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import EmployeesModel from "../../../Models/EmployeesModel";
import config from "../../../utils/Config";
import "./EmployeesDetails.css";
 

function EmployeesDetails(): JSX.Element {
 
    // Get Route Parameter:
    // useParams() פה אנו מזמנים את הריאקט הוקס 
    const params = useParams();

    // :id יוצרים משתנה  אשר יכנס אליו הערך שהכניס המשתמש במקום שכתוב
    //<Route path="/products/details/:id" element={<ProductDetails />} />
    //  חשוב לזכור שמה שרשום אחרי הנקודותיים 
    //useParams() חייב בלהיות זהה לפרופרטי של המשתנה שמחיל את ה
    //(const id = params.id) לדוגמא
    const id = params.id;
 
    // Create state for the product to display:
    // useState יוצרים פה משתנה ושמים אותו ב
    //מכיוון שאנו רוצים לשנות את ערכו במהלך הפרוייקט
    const [EmployeesDetails, setEmployeesDetails] = useState<EmployeesModel>();
 
    // AJAX request that product:
    // useEffect אנו שמים את הפעולות הללו תחת 
    //מכיוון שאנו רוצים לרנדר ולבקש את הבקשה הזו רק פעם אחת
    useEffect(() => {
        
        //פה אנו מבקשים את האיפיאי של האובייקט המבוקש ומכניסים אותו 
        // setProduct דרך ה Product למשתנה שלנו
        axios.get<EmployeesModel>(config.employeesUrl + id)
            .then(response => setEmployeesDetails(response.data))
            .catch(err => alert(err.message));
 
    }, []);
    

    const navigate = useNavigate();
 

    async function deleteEmployees() {
        try {
 
            // Are you sure message:
            //הודעה מפונקציה שמורה 
            const confirmDelete = window.confirm("Are you sure?");

            //במידה והמשתמש לחץ על ביטול מכיוון שהוא התחרט ולא רוצה למחוק 
            //אז הפעולה לא תתבצע והמערכת תצא מהפעולה
            //ובמידה והוא לחץ אישור ושהוא בטוח בפעולת המחיקה הקוד ימשיך
            if(!confirmDelete) return;
 
            // Delete this product:
            //delete מזמנים במתודת 
            //את האיפיאיי של האובייקט שרוצים למחוק
            //וכך מוחקים את האובייקט
            await axios.delete(config.employeesUrl + id);
            alert("employees Deleted");
 
            navigate("/EmployeesList");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
 
    return (
        <div className="EmployeesDetails">
 
            <h2>Employees Details</h2>

            {/*Loading במידה והמשתנה מצד שמאל עדיין לא קיבל ערך תפעיל את קומפוננטה */}
            {/*{ !product && <Loading /> }*/}

            {/*כאשר המשתנה השמאלי יקבל ערך הפעולה בצד הימני תתבצע*/}
            {EmployeesDetails &&
                <>
                    <h3>firstName: {EmployeesDetails.firstName}</h3>
                    <h3>lastName: {EmployeesDetails.lastName}</h3>
                    <h3>id: {EmployeesDetails.id}</h3>
                    <img src={config.employeesImageUrl + EmployeesDetails.imageName} />
 
                    <br />
                    {/* לינק לחזרה אחורה */}
                    {/* Navigate Back: */}
                    {/* <NavLink to="/products">Back</NavLink> */}
 
                    {/* Navigate Back: */}
                    {/* לינק לחזרה אחורה */}
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={deleteEmployees}>Delete</button>
                </>
            }
 
        </div>
    );
}
 
export default EmployeesDetails;


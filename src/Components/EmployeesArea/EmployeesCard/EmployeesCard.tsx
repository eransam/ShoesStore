import { NavLink } from "react-router-dom";
import EmployeesModel from "../../../Models/EmployeesModel";
import config from "../../../utils/Config";
import "./EmployeesCard.css";

//יוצרים אינטרפייס
interface EmployeesCardProps {
    Employeesone: EmployeesModel;
}

const imgemployees = "images/";
//יוצרים פונ' המקבלת כפרמטר פרופס (מילה שמורה)
// ProductCardProps מסוג 
//ומחזירה את ערכי הפרופרטיס הבאים:
function EmployeesCard(props: EmployeesCardProps): JSX.Element {
    return (
        <div className="EmployeesCard Box">
            <div>
                FirstName: {props.Employeesone.firstName}
                <br />
                LastNme: {props.Employeesone.lastName}
                <br />
                title: {props.Employeesone.birthDate}
                <br />
                city: {props.Employeesone.city}
                <br />
                employeesID: {props.Employeesone.employeesID}
                </div>
<div>
<NavLink to={"/employees/details/" + props.Employeesone.employeesID}>
  <p>עובדים</p>  
</NavLink>

</div>

            

            {/*
            <div>
                 <img src={config.employeesUrl + imgemployees + props.product.imageName} />
            </div>
            */}

        </div>
    );
}

//מייצא את הפטנקציה
export default EmployeesCard;


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
                title: {props.Employeesone.title}
                <br />
                country: {props.Employeesone.country}
                <br />
                city: {props.Employeesone.city}
                <br />
                birthDate: {props.Employeesone.birthDate}
                <br />
                Id: {props.Employeesone.id}
                </div>
<div>
<NavLink to={"/employees/details/" + props.Employeesone.id}>
<img src={config.employeesImageUrl + props.Employeesone.imageName} />
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


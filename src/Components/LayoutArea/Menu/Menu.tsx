import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {/*<a href="https://www.etsy.com/il-en/listing/1065574046/custom-air-force-1-butterfly-nike-swoosh?click_key=a3de8e6f1d3a35bf0c0412f7280167d53af77b98%3A1065574046&click_sum=8ebde840&rec_type=ss&ref=landingpage_similar_listing_top-8">נייק דגם הפרפרים הכחולים</a>*/}
            <NavLink to="/home"><b>דף הבית</b></NavLink>
            <NavLink to="/about"><b>עלינו</b></NavLink>
            <NavLink to="/productsshose"><b>מוצרים</b></NavLink>
            <NavLink to="/NorthwindProducts"><b>מוצרי נורדווינד</b></NavLink>
            <NavLink to="/storyseccses"><b>סיפורי הצלחה</b></NavLink>
            <NavLink to="/EmployeesList"><b>רשימת עובדים</b></NavLink>
            <NavLink to="/orders"><b>הזמנה חדשה</b></NavLink>
            <NavLink to="/Chat"><b>Chat with us</b></NavLink>
            
        

{/*
תגית זו היא בעצם קומפוננטה והיא מרנדרת את הפעולה מבלי ללכת לשרת ולאתחל שוב את כל 
דף האיצטיאמאל הראשי שלנו
וכך אנו יוצרים סינגל פייז טהור */}

{/*<NavLink to="/home">NavLink home</NavLink>*/}
            

        </div>
    );
}
export default Menu;

// percent
// category

// Creating a data type: 
//פה אנו יוצרים אינטרפייס שמחיל אובייקט אשר יש בתוכו
//שני משתנים מסוגים שונים
interface ShoseCardProps {
    brandName: string;
    size: number;
    price: number;
}

//פה אנו יוצרים פונקציה אשר מקבלת משתנה מסוג
// האינטרפייס שיצרנו 
//כך שהוא בעצם מחיל את תבנית האובייקט של האינטרפייס
function ShoseCard(props: ShoseCardProps): JSX.Element {
    return (

//פה אנו נציג את הערך שיהיה בתוך ה
//{props.percent}
//ואת הערך אנו נזין בקומפוננט הראשי שלנו כך לדוגמא
//<Sales percent={10} category="Beverages" />
//אנו עושים את הפעולה הזאת כדי שיהיה בעצם אפשרי להזין ערכי 
//משתנים מהקומפוננטה הראשית
<div className=" Box">
            <p>
            brandName: {props.brandName}
            size: {props.size}
            price: {props.price}
            </p>
        </div>
    );
}

export default ShoseCard;


import { useEffect, useState } from "react";
import "./ShowRandomBrand.css";

function ShowRandomBrand(): JSX.Element {

    //פה אנו יוצרים משתנה סטייטי
    const [time, setTime] = useState("");
    
    //זוהי פונקציה אשר אנו רוצים לרנדר את הפונקציה שבתוכה 
    //רק פעם אחד ולהגן עליה מפני רינדורים ואיתחולים 
    //נוספים שריאקט עושה מידי פעם 
    //פה לדוגמא הפונקציה סט אינטרבל תופעל פעם אחת
    //*אנו יכולים להכניס בתוך הסוגריים המרובעות 
    //משתנים אשר הרינדור של היוז אפקט יהיה בכל פעם שמשתנים אלו השתנו
    useEffect(() => {

        // Will be invoked only once - when component started (because of the []):
        const timerId = setInterval(() => {
            console.log(Math.random());
            const arr = ["nike","adidas","ribok"];
            let rand = Math.round(Math.random()*(arr.length-1));

            console.log(rand);
            
            setTime(arr[rand]);
        }, 1000);

        //בפקודה שאחרי הריטורן של היוז אפקט אנו יכולים לרשום פקודות
        //אשר יופעלו כאשר הפונקציה תימחק ותיסגר
        // Will be invoked only when component destroyed:
        return () => clearInterval(timerId);

    }, []);

    return (
        <div className="Clock Box">
            <p>
                <span>{time}</span>
            </p>
        </div>
    );
}

export default ShowRandomBrand;

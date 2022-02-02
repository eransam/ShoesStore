import { Component } from "react";
import "./RandomColor.css";
 
//פה יש לנו אינטרפייס (לסטייס) שבתוכו אנו יוצרים משתנה ורושמים את סוגו
interface RandomColorState {
    color: string;
}

//כאן אנו יוצרים קלאס קומפוננטס בשם
//RandomColor
//<{}, RandomColorState> 
//בתוך הסוגריים המשולשות בצד ימין אנו מקבלים ערכים מסוג 
//usestate
//שבקלאס קומפוננטס זה נקרא
//state
//אשר ערכים משתנים 
//(בתרגיל זה אנו בעצם מכניסים את האינטרפייס שלנו לתוך מקום הסטייט וכך בעצם אנו נוכל לשנות 
//את ערכי האינטרפייס)
//ומצד שמאל אנו מקבלים ערכים מסוג פרופס וכאשר אין לנו ערכי פרופס אנו שמים 
//סוגריים מסולסלות ריקות
class RandomColor extends Component<{}, RandomColorState> {
 
    //פה בקונסטרקטור אני מעדכנים שאין לנו ערך פרופס
    //ואנו מעדכנים שהערך של משתנה הסטייס שלנו אשר ערכו נמצא בתוך
    //interface RandomColorState
    //שווה ל
    //""
    public constructor(props: {}) {
        super(props);
        //פה אנו שמים בפונקצית 
        //state
        //את הערך הראשוני של משתנה ה
        //color 
        //שלנו
        this.state = { color: "" };
    }
 
    //פונקציה זו היא דומה מאוד לפונקציית 
    //useEffect
    //והיא מרנדרת את הפעולות פעם אחת
    public componentDidMount(): void {
        document.title = "Northwind | Home";
        this.doWork();
    }
    
    //פה אנו יוצרים משתנה אשר יש בתוכו פונקציה 
    public doWork = () => {

        //פה אנו משנים את ערך האובייקט שתבוך הסטייט שלנו 
        //בעזרת ה
        //setState
        this.setState({ color: this.getColor() })
    }
 
    //פה אנו יוצרים פונקציה אשר מחזירה צבע רנדומלי
    private getColor(): string {
        // RGB 0-255, 0-255, 0-255
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
 
    public render(): JSX.Element {
        return (
            //פה אנו קובעים שצבע הרקע יהיה הצבע שנמצא בתוך הערך של ה
            //color 
            //בתוך המשתנה 
            //state
            //*בתור התחלה הרגע יהיה ללא צבע מישום שאיתחלנו את הערך הזה ב
            //""
            //ולאחר לחיצה צבע הרגע השתנה לצבע רנדומלי
            <div className="RandomColor Box" style={{ backgroundColor: this.state.color }}>
                <p>
                    <button >Test</button>
                </p>
            </div>
        );
    }
}
 
export default RandomColor;

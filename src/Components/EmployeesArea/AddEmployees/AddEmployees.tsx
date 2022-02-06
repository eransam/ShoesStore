import axios from "axios";
import { useForm } from "react-hook-form";

//מחזיר אחורה
import { useNavigate } from "react-router-dom";
import EmployeesModel from "../../../Models/EmployeesModel";
import notify from "../../../service/NotifyService";
import config from "../../../utils/Config";
import "./AddEmployees.css";
 
function AddEmployees(): JSX.Element {

    //אנו יוצרים קובץ מודול שנראה כך:
    //class ProductModel {
    //   public id: number = 0;
    //  public name: string = "";
    // public price: number = 0;
    // public stock: number = 0;
    // public imageName: string = "";
    // public image: FileList = null;
    // }



    //פה אנו מייבאים את הפונקציות האלה מהריאקט הוקס 
    //useForm
    //המקבל ערך מסוג 
    //ProductModel
    const { register, handleSubmit , formState } = useForm<EmployeesModel>();
 
    //פה אנו מזמנים את הפונקציה
    //useNavigate()
    //לתוך משתנה
    const navigate = useNavigate();
    
    //פה אנו יוצרים פונקציה אסינק המקבלת פרמטר מסוג 
    //ProductModel
    async function submit(Employees: EmployeesModel) {
        try {
           
            // Convert out product to FormData:
            //פה אנו מעבירים את המידע שהתקבל לשפה שהפורם שלנו מבינה
            const formData = new FormData();
            formData.append("firstName", Employees.firstName);
            formData.append("lastName", Employees.lastName);
            formData.append("title", Employees.title);
            formData.append("country", Employees.country);
            formData.append("city", Employees.city);
            formData.append("birthDate", Employees.birthDate);
            formData.append("image", Employees.image.item(0));


 
            // Post the new product to the server:
            //פה אנו דוחפים את האובייקט שיצרנו לסרבר
            //ומכניסים את כל האובייקטים מהאיפיאי כולל האובייקט החדש שיצרנו למשתנה שלנו
            const response = await axios.post<EmployeesModel>(config.employeesUrl, formData);

            //פה אנו מייבאים את כל המידע למשתנה 
            const addedemployees = response.data;
            notify.success("employees has been added!");

            
 
            // Navigate back to all products:
            //מחזיר אחורה אוטומטית
            navigate("/EmployeesList");
        }
        catch(err: any) {
            notify.error(err.message);

        }
    }
 
    return (
        <div className="AddEmployees Box">


            
            {/*פה אנו יוצרים פורם */}

            {/*אי אפשר להכניס ישירות לפורם פונקציות אז אנו מזמנים את 
            handleSubmit
            useForm מהריאקט הוקס
            ואליו מכניסים את הפונקציות*/}

            {/* handleSubmit
            לוקחת את כל התגיות אשר הכנסנו בתוכם 
            register
            והופכת אותם לכאילו אובייקט אחד ומזריקה אותם בתור פרמטר לפונקציה שבתוכה
            (submit)*/}
            <form onSubmit={handleSubmit(submit)}>
            <h2>Add Employees</h2>


 <label>firstName: </label>

{/*יוצרים תיבת טקסט לערך 
 name
 ויוצרים ולידציות ע''י
 register*/}

 {/*הפונקציה 
register
בעצם מלכדת את כל התגים לאובייקט אחד*/}
 <input type="text" {...register("firstName", { required: { 
     value: true, message: "Missing employeed name" },
     min: { value: 2, message: "must be minimom 2 letters" },
     max: { value: 30, message: "must be max 30 letters" },
     })} />

    {/*פה תוצג הודעת השגיאה כאשר המשתמש עובד על הולידציה */}
     <span>{formState.errors.firstName?.message}</span>


{/* כנ''ל*/}
 <label>lastName: </label>
 <input type="text"  {...register("lastName", {
                    required: { value: true, message: "Missing lastName" },
                    min: { value: 2, message: "must be minimom 2 letters" },
                    max: { value: 30, message: "must be max 30 letters" },
                })} />
                <span>{formState.errors.lastName?.message}</span>


{/* כנ''ל*/}
 <label>title: </label>
 <input type="text" {...register("title", {
                    required: { value: true, message: "Missing title" },
                    min: { value: 5, message: "must be minimom 2 letters" },
                    max: { value: 20, message: "must be max 30 letters" },
 })} />
                 <span>{formState.errors.title?.message}</span>

{/* כנ''ל*/}
<label>country: </label>
 <input type="text" {...register("country", {
                    required: { value: true, message: "Missing country" },
                    min: { value: 3, message: "must be minimom 2 letters" },
                    max: { value: 30, message: "must be max 30 letters" },
 })} />
                 <span>{formState.errors.country?.message}</span>

                 {/* כנ''ל*/}
 <label>city: </label>
 <input type="text" {...register("city", {
                    required: { value: true, message: "Missing city" },
                    min: { value: 3, message: "must be minimom 2 letters" },
                    max: { value: 30, message: "must be max 30 letters" },
 })} />
                 <span>{formState.errors.city?.message}</span>

                 {/* כנ''ל*/}
 <label>birthDate: </label>
 <input type="text" {...register("birthDate", {
                    required: { value: true, message: "Missing birthDate" },
 })} />
                 <span>{formState.errors.birthDate?.message}</span>


<label>Image: </label>
<input type="file" accept="image/*" {...register("image", {
                    required: { value: true, message: "Missing birthDate" },
 })} />
                 <span>{formState.errors.image?.message}</span>


{/* ברירת המחדל של כפתורים זה 
submit
אלא עם כן מאתחלים אותו לעשות פעולות אחרות*/}
 <button>Add</button>

</form>
</div>
);
}

export default AddEmployees;

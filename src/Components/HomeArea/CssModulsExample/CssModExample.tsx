import css from "./example.module.css";
//אנו הופכים את הקובץ 
//css
//לקובץ מסוג
//.module.css
//וכך אנו יכולים לייבא מקובץ הסיאסאס שלנו קלאסים

function CssModExample(): JSX.Element {
   
    return (
        <div >
            <p className={css.CoolText}>
            Css Module Example with class CoolText
                <span className={css.Smaller}>Css Module Example with class Smaller</span>
            </p>
        </div>
    );
}
 
export default CssModExample;

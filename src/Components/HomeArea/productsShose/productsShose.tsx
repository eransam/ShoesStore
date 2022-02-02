import "./productsShose.css";
import pic1 from "../../../Assets/Images/shose1.jpg";
import pic2 from "../../../Assets/Images/shose2.jpg";
import pic3 from "../../../Assets/Images/shose3.jpg";
import pic4 from "../../../Assets/Images/shose4.jpg";
import pic5 from "../../../Assets/Images/shose5.jpg";
import pic6 from "../../../Assets/Images/shose6.jpg";

function ProductsShose(): JSX.Element {
    return (
        <div className="productsShose">
            <h2>מוצרים...</h2>
            <img src={pic1} alt="pic1" />
            <img src={pic2} alt="pic2" />
            <img src={pic3} alt="pic3" />
            <br />
            <img src={pic4} alt="pic4" />
            <img src={pic5} alt="pic5" />
            <img src={pic6} alt="pic6" />

        </div>
    );
}

export default ProductsShose;

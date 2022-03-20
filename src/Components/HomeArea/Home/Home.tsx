import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import Sales from "../Sales/Sales";
import List from "../List/List";
import ShoseCard from "../ShoseCard/ShoseCard";
import ShowRandomBrand from "../ShowRandomBrand/ShowRandomBrand";
import ParallaxImageMain from "../../HomeArea/paralaxScroll/paralaxScroll";




import "./Home.css";
import RandomColor from "../RandomColor/RandomColor";
import CssModExample from "../CssModulsExample/CssModExample";
function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Conditional Rendering */}
            <ParallaxImageMain />
            <Sales />
            <YoutubeVideo />
            <List />
            <RandomColor />
            <ShoseCard brandName="nike" size={43} price={299}/>
            <ShoseCard brandName="adidas" size={39} price={350}/>
            <ShoseCard brandName="rebok" size={40} price={250}/>
            <br />
            <ShowRandomBrand />
            {/*דוג' לשימוש עם קלאס מולדס */}
            <CssModExample />
            
        </div>
    );
}

export default Home;

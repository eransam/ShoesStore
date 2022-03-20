import { Parallax } from 'react-parallax';
import imgShoes from '../../../Assets/Images/shose1.jpg';
import "./paralaxScroll.css";


function ParallaxImageMain(): JSX.Element {
    return (
        
        <Parallax className='image1' bgImage = {imgShoes} bgImageAlt="the cat" strength={200}>
        <div className='content'>
            <span className='img-txt'><h1>welcome to eran shoes stores</h1> </span>
            </div>
        </Parallax>
    );
}
export default ParallaxImageMain;
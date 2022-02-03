import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Logo from "../../HomeArea/Logo/Logo";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
            
            <AuthMenu />

            <Logo />
            <h1>erans nike painting</h1>
        </div>
    );
}

export default Header;


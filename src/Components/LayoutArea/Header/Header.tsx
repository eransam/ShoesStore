import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Logo from "../../HomeArea/Logo/Logo";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
            
            <div className="thelogo">
            <Logo />
            </div>
            <div className="automenu">
            <AuthMenu />
            </div>


        </div>
    );
}

export default Header;


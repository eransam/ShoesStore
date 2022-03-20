//import Home from "../../HomeArea/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <div className="layer">
            <aside>
                <Menu />
            </aside>
            </div>

            <main>
                <div className="background">
                        <Routing />
                </div>
            </main>
            <div className="backgroundFooter">
            <footer>
                <Footer />
            </footer>
            </div>
        </div>
    );
}

// Export this function outside of that source file:
export default Layout;
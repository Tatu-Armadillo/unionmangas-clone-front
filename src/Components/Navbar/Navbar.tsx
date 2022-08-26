// Components
import MenuNavbar from "./MenuNavbar/MenuNavbar";

const Navbar = () => {
    return (
        <nav id="Nav-black" className="navbar navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Logo</a>
                <MenuNavbar />
            </div>
        </nav>
    );
}

export default Navbar;
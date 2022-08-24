// Icons
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
// Components
import Menu from "../Menu";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="position-relative">
                    <FaUserAlt className="text-light fs-4 me-3" />
                    <Menu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
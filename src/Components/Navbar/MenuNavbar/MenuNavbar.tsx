import { Nav } from "react-bootstrap"
// Icons 
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaNewspaper } from "@react-icons/all-files/fa/FaNewspaper";

const MenuNavbar = () => {
    return (
        <div>
            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Nav>
                        <Nav.Link href="/" className="text-light"><FaHome className="fs-4 me-2" />Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/" className="text-light"><FaNewspaper className="fs-4 me-2" />Recentes</Nav.Link>
                    </Nav>
                </div>
            </div>
        </div>
    )
}

export default MenuNavbar;
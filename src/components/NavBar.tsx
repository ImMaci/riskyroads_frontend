import {Navbar, NavbarLink} from "flowbite-react";
import './NavBarCSS.css';

const NavBar = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'Papyrus' }}>Risky Roads</h1>
            <Navbar id="nav" fluid rounded>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink href="imprint">Impressum</NavbarLink>
            </Navbar>
            <br/>
        </div>
        );
};

export default NavBar;
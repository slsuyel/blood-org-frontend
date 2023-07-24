import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.css'
function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="fs-5 mx-2 text-decoration-none" to="/">
                            Home
                        </NavLink>
                        <NavLink className="fs-5 mx-2 text-decoration-none" to="/dashboard">
                           Admin Dashboard
                        </NavLink>
                        <NavLink className="fs-5 mx-2 text-decoration-none" to="/studentdashboard">
                            Student Dashboard
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
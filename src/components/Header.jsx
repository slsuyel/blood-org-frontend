
import { useContext } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top"  className=' bg-white border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3' variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <Nav.Link className='text-dark' href="/">Home</Nav.Link>
                    <Nav.Link className='text-dark' href="/course">Course</Nav.Link>
                    <Nav.Link className='text-dark' href="/investor">Investor</Nav.Link>
                    <Nav.Link className='text-dark' href="/student/register">Services</Nav.Link>
                    <Nav.Link className='text-dark' href="#about">About Us</Nav.Link>

                    {
                        isLoggedIn == true ? <Nav.Link href="/studentdashboard"
                            style={{ backgroundColor: '#08118E' }}
                            className='ms-3 nav-link px-3 rounded-2 text-white'
                        >Profile</Nav.Link> : <>
                            <Nav.Link href="/student/signin"
                                style={{ backgroundColor: '#08118E' }}
                                className='ms-3 nav-link px-3 rounded-2 text-white'
                            >Login/Register</Nav.Link> <Nav.Link className='text-dark' href="/admin/signin">Admin Login</Nav.Link>
                        </>
                    }



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

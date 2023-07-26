import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className=' bg-white border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm' variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <Nav.Link className='text-dark' href="/">Home</Nav.Link>
                    <Nav.Link className='text-dark' href="/teachers">Course</Nav.Link>
                    <Nav.Link className='text-dark' href="/student_at_a_glance">Investor</Nav.Link>
                    <Nav.Link className='text-dark' href="/student/register">Services</Nav.Link>
                    <Nav.Link className='text-dark' href="/student/payment">About Us</Nav.Link>
                    <Nav.Link href="/student/signin"
                        style={{ backgroundColor: '#08118E' }}
                        className='ms-3 nav-link px-3 rounded-2 text-white'
                    >Login/Register</Nav.Link>
                    <Nav.Link className='text-dark' href="/admin/signin">Admin Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

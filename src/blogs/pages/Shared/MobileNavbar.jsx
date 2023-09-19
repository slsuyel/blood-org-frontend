/* eslint-disable no-unused-vars */

import { Navbar, Container, } from 'react-bootstrap';

import { useState } from 'react';
const MobileNavbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary mx-2">
            <Container fluid>
                <Navbar.Toggle onClick={handleShow} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                </Navbar.Collapse>
                <Navbar.Brand href="#">  <img className=" img-fluid " src="https://backend.newsnow24.com/storage/photos/shares/newsnow-logo.png" alt="" width={'150px'} /></Navbar.Brand>

                <div className="d-flex flex-wrap gap-3 align-items-center">

                    <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                        <button
                            className="bg-2nd border-0 dropdown-toggle  px-2 rounded-circle"
                            id="dropdown-search"
                            onClick={handleDropdownToggle}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        <div className={`dropdown-menu p-0 rounded-3 rounded-end-5 search-btn  ${isDropdownOpen ? 'show' : ''}`}>
                            <form className="d-flex">
                                <input type="search" placeholder="খুঁজুন" aria-label="Search" className="form-control border-0 bg-2nd " />

                                <button type="submit" className="bg-red border-0 rounded-end-4 px-2"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>


                    <button className="btn bg-2nd px-2  py-0 rounded-circle">
                        <i className="fas fa-moon"></i>
                    </button>
                </div>


            </Container>
        </Navbar>
    );
};

export default MobileNavbar;

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import useState
import useLoggedIn from '../hooks/useLoggedIn';
import useOrgLoggedIn from './../hooks/useOrgLoggedIn';
import useAdminLoggedIn from './../hooks/useAdminLoggedIn';

const backgroundStyle = {
    background: 'linear-gradient(218deg, #67c1d0, #be829d, #eaedea, #9ded9d)',
    backgroundSize: '240% 240%',
    animation: 'gradient-animation 4s ease infinite',
};

const Header = () => {

    const location = useLocation()

    const { authenticated, loading } = useLoggedIn();
    const { orgAuthenticated } = useOrgLoggedIn();
    const { adminAuthenticated } = useAdminLoggedIn();

    const [navbarExpanded, setNavbarExpanded] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown

    useEffect(() => {
        setDropdownOpen(false);
    }, [location.pathname]);

    const closeNavbar = () => {
        setNavbarExpanded(false);
    };



    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            className='border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3'
            variant="danger"
            expanded={navbarExpanded}
        >
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setNavbarExpanded(!navbarExpanded)}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="active-link"
                        className='text-white mt-2 text-decoration-none'
                        onClick={closeNavbar}
                    >
                        হোম
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="active-link"
                        className='text-white mt-2 text-decoration-none'
                        onClick={closeNavbar}
                    >
                        আমাদের সম্পর্কে
                    </NavLink>
                    <NavLink
                        to="/all-donars"
                        activeClassName="active-link"
                        className='text-white mt-2 text-decoration-none'
                        onClick={closeNavbar}
                    >
                        সকল ডোনার
                    </NavLink>
                    <NavLink
                        to="/organizations"
                        activeClassName="active-link"
                        className='text-white mt-2 text-decoration-none'
                        onClick={closeNavbar}
                    >
                        সহযোগী সংগঠন
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        activeClassName="active-link"
                        className='text-white mt-2 text-decoration-none'
                        onClick={closeNavbar}
                    >
                        নিউজ
                    </NavLink>
                    {/* {authenticated === true ? (
                        <NavLink
                            to="/profile"
                            style={backgroundStyle}
                            className='ms-3 nav-link px-3 rounded-2 text-bg-info'
                            onClick={closeNavbar}
                        >
                            প্রোফাইল
                        </NavLink>
                    ) : orgAuthenticated || adminAuthenticated ? (
                        <NavLink
                            to="/dashboard"
                            style={backgroundStyle}
                            className='ms-3 nav-link px-3 rounded-2 text-bg-info'
                            onClick={closeNavbar}
                        >
                            Dashboard
                        </NavLink>
                    ) : (
                        <>
                            <NavLink
                                to="/donar/signin"
                                style={backgroundStyle}
                                className='ms-3 nav-link px-3 rounded-2 text-bg-info'
                                onClick={closeNavbar}
                            >
                                লগিন/রেজিস্ট্রেশন
                            </NavLink>
                        </>
                    )} */}

                    <NavDropdown className='rounded'
                        title={`${authenticated ? ' প্রোফাইল' : orgAuthenticated || adminAuthenticated ? "Dashboard" : 'লগিন / রেজিস্ট্রেশন'}`} id="basic-nav-dropdown"
                        style={backgroundStyle}
                        show={dropdownOpen} // Set the show prop to control the dropdown
                        onToggle={(isOpen) => setDropdownOpen(isOpen)} // Handle dropdown open/close

                    >
                        {authenticated === true ? (
                            <NavLink
                                to="/profile"

                                className='  my-1 nav-link pt-1 px-3 py-0 text-nowrap '
                                onClick={closeNavbar}
                            >
                                প্রোফাইল
                            </NavLink>
                        ) : orgAuthenticated || adminAuthenticated ? (
                            <NavLink
                                to="/dashboard"

                                className='  my-1 nav-link pt-1 px-3 py-0 text-nowrap '
                                onClick={closeNavbar}
                            >
                                Dashboard
                            </NavLink>
                        ) : (
                            <>
                                <NavLink
                                    to="/donar/signin"

                                    className='my-0 py-1 nav-link  px-3 text-nowrap '
                                    onClick={closeNavbar}
                                >
                                    <i className="fa-solid fa-user"></i>  রক্তদাতা লগিন/রেজিঃ
                                </NavLink>
                                <hr className='m-0' />
                                <NavLink
                                    to="org-login"

                                    className=' my-0 py-1 nav-link  px-3 text-nowrap '
                                    onClick={closeNavbar}
                                >
                                    <i className="fa-solid fa-layer-group"></i>   সংগঠন লগিন/রেজিঃ
                                </NavLink>
                            </>
                        )}




                    </NavDropdown>



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

// import { Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import useLoggedIn from '../hooks/useLoggedIn';
// import useOrgLoggedIn from './../hooks/useOrgLoggedIn';
// import useAdminLoggedIn from './../hooks/useAdminLoggedIn';

// const backgroundStyle = {
//     background: 'linear-gradient(218deg, #67c1d0, #be829d, #eaedea, #9ded9d)',
//     backgroundSize: '240% 240%',
//     animation: 'gradient-animation 4s ease infinite',
// };


// const Header = () => {
//     const { authenticated, loading } = useLoggedIn()
//     const { orgAuthenticated, } = useOrgLoggedIn()
//     const { adminAuthenticated, } = useAdminLoggedIn()

//     return (
//         <Navbar collapseOnSelect expand="lg" fixed="top" className='  border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3' variant="danger">
//             <Navbar.Toggle aria-controls="responsive-navbar-nav " />
//             <Navbar.Collapse id="responsive-navbar-nav ">
//                 <Nav className="justify-content-evenly navbar-nav w-100">
//                     <NavLink exact to="/" activeClassName="active-link" className='text-white mt-2 text-decoration-none'>হোম</NavLink>
//                     <NavLink to="/about" activeClassName="active-link" className='text-white mt-2 text-decoration-none'>আমাদের সম্পর্কে</NavLink>
//                     <NavLink to="/all-donars" activeClassName="active-link" className='text-white mt-2 text-decoration-none'>সকল ডোনার</NavLink>
//                     <NavLink to="/organizations" activeClassName="active-link" className='text-white mt-2 text-decoration-none'>সহযোগী সংগঠন </NavLink>

//                     <NavLink to="/blogs" activeClassName="active-link" className='text-white mt-2 text-decoration-none'>নিউজ</NavLink>

//                     {authenticated === true ? (
//                         <NavLink to="/profile" style={backgroundStyle} className='ms-3 nav-link px-3 rounded-2 text-bg-info'>প্রোফাইল</NavLink>
//                     ) : orgAuthenticated || adminAuthenticated ? <NavLink to="/dashboard" style={backgroundStyle} className='ms-3 nav-link px-3 rounded-2 text-bg-info'>Dashboard</NavLink> : (
//                         <>
//                             <NavLink to="/donar/signin" style={backgroundStyle} className='ms-3 nav-link px-3 rounded-2 text-bg-info'>লগিন/রেজিস্ট্রেশন</NavLink>

//                         </>
//                     )}

//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default Header;
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import useLoggedIn from '../hooks/useLoggedIn';
import useOrgLoggedIn from './../hooks/useOrgLoggedIn';
import useAdminLoggedIn from './../hooks/useAdminLoggedIn';

const backgroundStyle = {
    background: 'linear-gradient(218deg, #67c1d0, #be829d, #eaedea, #9ded9d)',
    backgroundSize: '240% 240%',
    animation: 'gradient-animation 4s ease infinite',
};

const Header = () => {
    const { authenticated, loading } = useLoggedIn();
    const { orgAuthenticated } = useOrgLoggedIn();
    const { adminAuthenticated } = useAdminLoggedIn();

    const [navbarExpanded, setNavbarExpanded] = useState(false);


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
                    {authenticated === true ? (
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
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;


import { Navbar, Nav, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import DynamicDate from '../../../components/DynamicDate';


const menuItems = [

    'জাতীয়',
    'রাজনীতি',
    'বাংলাদেশ',
    'সারাবিশ্ব',
    'খেলার খবর',
    'বিনোদন',
    'অর্থনীতি',
    'শিক্ষা',
    'প্রবাস',
    'বিশেষ প্রতিবেদন',
    'চাকরি',
    'ভিডিও',
    'অন্যান্য'
];

const BlogHeader = () => {
    const [show, setShow] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };



    return (
        <>

            <div className="d-md-none py-2 text-white" style={{ backgroundColor: '#6B7280' }}>
                <DynamicDate />
            </div>


            <Navbar sticky="top" expand="lg" className="d-md-none d-xl-none align-items-center bg-white border-bottom border-danger d-flex px-2 mt-2">

                <div>
                    <span onClick={handleShow} className='me-4'>
                        <i className="bg-2nd fa-bars fa-solid px-3 py-2 rounded-4"></i>
                    </span>
                </div>

                <div>
                    <Link to='/'>  <img className=" img-fluid " src='https://voj-suyel.netlify.app/assets/logo-6639ffd8.jpg' alt="" width={'150px'} /></Link>
                </div>

                <div className='align-items-center d-flex gap-2'>
                    <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                        <button
                            className="bg-2nd border-0 dropdown-toggle  px-2 rounded-circle"
                            id="dropdown-search"
                            onClick={handleDropdownToggle}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        <div className={`dropdown-menu p-0 rounded-0 rounded-end-5  ${isDropdownOpen ? 'show' : ''}`} style={{
                            marginLeft: "-214px",
                            width: "254px",
                            marginTop: "6px",
                            background: "red"
                        }}>
                            <form className="d-flex">
                                <input type="search" placeholder="খুঁজুন" aria-label="Search" className="form-control border-0 bg-2nd " />

                                <button type="submit" className="bg-red border-0 rounded-end-4 px-2"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </Navbar>


            {/* d-none d-md-block d-xl-none */}
            <Navbar sticky="top" collapseOnSelect expand="lg" className='d-none d-sm-none d-md-block border-2 border-bottom fw-bold  navbar navbar-expand-lg  pri-bg py-0 shadow-sm '>

                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-evenly navbar-nav w-100 container">

                        <NavLink to={`/latest`} className="link-hover nav-link fw-normal">
                            সর্বশেষ
                        </NavLink>

                        {menuItems.map((item, index) => (
                            <NavLink key={index} to={`/category/${encodeURIComponent(item)}`} className="link-hover nav-link fw-normal">{item}</NavLink>
                        ))}

                    </Nav>
                    <span onClick={handleShow} className='me-4'>
                        <i className="bg-2nd fa-bars fa-solid px-3 py-1 rounded-2"></i>
                    </span>
                </Navbar.Collapse>

            </Navbar>

            <Offcanvas show={show} className='canvas' onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>

                    <Link to='/' className='text-center'>
                        <img className="col-8 img-fluid mx-auto px-2" src='https://voj-suyel.netlify.app/assets/logo-6639ffd8.jpg' alt="logo" />
                    </Link>



                </Offcanvas.Header>
                <Offcanvas.Body>
                    {menuItems.map((item, index) => (
                        <NavLink key={index} to={`/category/${encodeURIComponent(item)}`} className="border-bottom border-danger fw-normal mb-2 pb-2 nav-link">{item}</NavLink>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default BlogHeader;
